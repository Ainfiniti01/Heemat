import type { Plugin } from 'vite';

export function loadFontsFromTailwindSource(): Plugin {
  const virtualModuleId = 'virtual:load-fonts.css';

  return {
    name: 'load-fonts-from-tailwind-source',
    resolveId(id) {
      if (id === virtualModuleId) {
        return virtualModuleId;
      }
      return null;
    },
    load(id) {
      if (id === virtualModuleId) {
        // Generate a React component that loads the fonts
        // For now, we'll hardcode the fonts found in public/font
        return `
                  @font-face {
                    font-family: 'Cinzel Decorative';
                    src: url('/font/Cinzel_Decorative/CinzelDecorative-Regular.ttf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                  }
                  @font-face {
                    font-family: 'Cinzel Decorative';
                    src: url('/font/Cinzel_Decorative/CinzelDecorative-Bold.ttf') format('truetype');
                    font-weight: bold;
                    font-style: normal;
                  }
                  @font-face {
                    font-family: 'Cinzel Decorative';
                    src: url('/font/Cinzel_Decorative/CinzelDecorative-Black.ttf') format('truetype');
                    font-weight: 900;
                    font-style: normal;
                  }
                  @font-face {
                    font-family: 'Great Vibes';
                    src: url('/font/Great_Vibes/GreatVibes-Regular.ttf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                  }
                  @font-face {
                    font-family: 'Playball';
                    src: url('/font/Playball/Playball-Regular.ttf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                  }
                `
      }
      return null;
    },
  };
}
