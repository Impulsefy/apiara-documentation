import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>APIara</span>,
  project: {
    link: 'https://github.com/Impulsefy/apiara-documentation',
  },
  search: {
    placeholder: 'Pesquisar...',
  },
  toc: {
    float: true,
    title: "Nessa página"
  },
  editLink: {
    text: "Edite essa página no GitHub →"
  },
  feedback: {
    content: "Dúvidas? Nos dê feedback →",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Impulsefy Docs",
    };
  },
  docsRepositoryBase: 'https://github.com/Impulsefy/apiara-documentation/tree/main',
  footer: {
    text: 'Impulsefy Docs',
  },
}

export default config
