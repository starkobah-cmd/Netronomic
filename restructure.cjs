const fs = require('fs');

const path = 'src/components/ContactUs.tsx';
let content = fs.readFileSync(path, 'utf8');

// The marker for the start of the 2-Column layout
const layoutStart = `        {/* 2-Column Main Layout: Contact Details & Form */}`;
// The marker for the start of the Estimator
const estimatorStart = `        {/* Interactive Quick Package Estimator Box */}`;
// The marker for the end of the Estimator (div closing before </div>    </section>)
const estimatorEndStr = `        </div>

      </div>
    </section>`;

// Let's find the indices
const iLayout = content.indexOf(layoutStart);
const iEstimator = content.indexOf(estimatorStart);

if (iLayout === -1 || iEstimator === -1) {
  console.log("Could not find markers", { iLayout, iEstimator });
  process.exit(1);
}

// 1. Extract the estimator block
const estimatorBlock = content.substring(iEstimator, content.indexOf('      </div>\n    </section>'));

// 2. Remove the estimator block from its original position
let newContent = content.substring(0, iEstimator) + content.substring(content.indexOf('      </div>\n    </section>'));

// 3. Add `mb-16` to estimatorBlock so it pushes the grid down
const modifiedEstimatorBlock = estimatorBlock.replace(
  `className="bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl space-y-6"`,
  `className="bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl space-y-6 mb-16"`
);

// 4. Insert the modified estimator block BEFORE the layout grid
newContent = newContent.substring(0, iLayout) + modifiedEstimatorBlock + '\n' + newContent.substring(iLayout);

fs.writeFileSync(path, newContent, 'utf8');
console.log("Restructured ContactUs.tsx");
