import JSZip from 'jszip';
import { SpaceIcon } from '../data/iconsData';

export function downloadSvgFile(filename: string, svgContent: string) {
  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename.endsWith('.svg') ? filename : `${filename}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function downloadAllSvgsZip(icons: SpaceIcon[]): Promise<void> {
  const zip = new JSZip();
  const rootFolder = zip.folder("cosmic-space-avatars");

  icons.forEach(icon => {
    const categoryFolder = rootFolder?.folder(icon.category);
    categoryFolder?.file(`${icon.id}.svg`, icon.svg);
  });

  const content = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(content);
  const link = document.createElement('a');
  link.href = url;
  link.download = "cosmic-space-avatars-84-suite.zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function generateSpriteSheet(icons: SpaceIcon[]): string {
  const symbols = icons.map(icon => {
    const innerContent = icon.svg
      .replace(/<svg[^>]*>/, '')
      .replace('</svg>', '');
    return `  <symbol id="icon-${icon.id}" viewBox="0 0 32 32">\n    ${innerContent.trim()}\n  </symbol>`;
  }).join('\n\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n${symbols}\n</svg>`;
}
