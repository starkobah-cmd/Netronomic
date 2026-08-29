const fs = require('fs');

const path = 'src/components/ContactUs.tsx';
let content = fs.readFileSync(path, 'utf8');

const layoutStart = `        {/* 2-Column Main Layout: Contact Details & Form */}`;
const estimatorStart = `        {/* Interactive Quick Package Estimator Box */}`;
const endMarker = `      </div>\n    </section>`;

const iEstimator = content.indexOf(estimatorStart);
const iLayout = content.indexOf(layoutStart);
const iEnd = content.indexOf(endMarker);

if (iLayout === -1 || iEstimator === -1 || iEnd === -1) {
  console.log("Could not find markers", { iLayout, iEstimator, iEnd });
  process.exit(1);
}

// Extract estimator block (from iEstimator to iLayout)
const estimatorBlockRaw = content.substring(iEstimator, iLayout);

// Remove it from the current content
let newContent = content.substring(0, iEstimator) + content.substring(iLayout);

// Remove the `mb-16` we added
const revertedEstimatorBlock = estimatorBlockRaw.replace(
  `className="bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl space-y-6 mb-16"`,
  `className="bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl space-y-6"`
);

// We want to insert the estimator block right before `      </div>\n    </section>`
// Wait, looking at the original structure, the layout ends with a `</div>`, and then the estimator block comes.
// But we need to find the new end marker after taking out the estimator block.
const newIEnd = newContent.indexOf(endMarker);

// The original estimator block didn't have a trailing newline before `</div>\n    </section>` or maybe it did.
// Let's just insert it before newIEnd.
newContent = newContent.substring(0, newIEnd) + revertedEstimatorBlock + newContent.substring(newIEnd);

fs.writeFileSync(path, newContent, 'utf8');
console.log("Reverted ContactUs.tsx");
