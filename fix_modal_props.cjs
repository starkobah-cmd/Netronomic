const fs = require('fs');

function updateModal(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /import \{ SiteConfig \} from '\.\.\/data\/siteConfig';\n/,
    ''
  );
  content = content.replace(
    /import \{ agencyInfo.*\} from '\.\.\/data\/agencyData';/,
    `import { agencyInfo } from '../data/agencyData';\nimport { SiteConfig } from '../data/siteConfig';`
  );
  
  if (file === 'src/components/PortfolioModal.tsx') {
    content = content.replace(
      /interface PortfolioModalProps \{/,
      `interface PortfolioModalProps {\n  siteConfig?: SiteConfig;`
    );
    content = content.replace(
      /export const PortfolioModal: React\.FC<PortfolioModalProps> = \(\{ item, onClose, onRequestSimilar \}\) => \{/,
      `export const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose, onRequestSimilar, siteConfig }) => {\n  const activeAgency = siteConfig?.agency || agencyInfo;`
    );
    content = content.replace(/agencyInfo\.whatsappNumber/g, 'activeAgency.whatsappNumber');
  } else if (file === 'src/components/ServiceModal.tsx') {
    content = content.replace(
      /interface ServiceModalProps \{/,
      `interface ServiceModalProps {\n  siteConfig?: SiteConfig;`
    );
    content = content.replace(
      /export const ServiceModal: React\.FC<ServiceModalProps> = \(\{ item, onClose, onSelectService \}\) => \{/,
      `export const ServiceModal: React.FC<ServiceModalProps> = ({ item, onClose, onSelectService, siteConfig }) => {\n  const activeAgency = siteConfig?.agency || agencyInfo;`
    );
    content = content.replace(/agencyInfo\.whatsappNumber/g, 'activeAgency.whatsappNumber');
  } else if (file === 'src/components/QuickQuoteModal.tsx') {
    content = content.replace(
      /interface QuickQuoteModalProps \{/,
      `interface QuickQuoteModalProps {\n  siteConfig?: SiteConfig;`
    );
    content = content.replace(
      /export const QuickQuoteModal: React\.FC<QuickQuoteModalProps> = \(\{ isOpen, onClose, initialService \}\) => \{/,
      `export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({ isOpen, onClose, initialService, siteConfig }) => {\n  const activeAgency = siteConfig?.agency || agencyInfo;`
    );
    content = content.replace(/agencyInfo\.whatsappNumber/g, 'activeAgency.whatsappNumber');
    content = content.replace(/agencyInfo\.phone/g, 'activeAgency.phone');
    content = content.replace(/agencyInfo\.email/g, 'activeAgency.email');
  }
  
  fs.writeFileSync(file, content);
}

updateModal('src/components/PortfolioModal.tsx');
updateModal('src/components/ServiceModal.tsx');
updateModal('src/components/QuickQuoteModal.tsx');
