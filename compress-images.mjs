/**
 * Image compression script for designyuv.com
 * Targets the specific images flagged by Lighthouse as oversized.
 * Run: node scripts/compress-images.mjs
 */

import sharp from "sharp";
import { existsSync, statSync, renameSync, mkdirSync, unlinkSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const BACKUP = join(PUBLIC, "_originals");

if (!existsSync(BACKUP)) mkdirSync(BACKUP, { recursive: true });

function kb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

async function compress(src, options = {}) {
  const fullSrc = join(PUBLIC, src);
  if (!existsSync(fullSrc)) {
    console.log(`skipping (not found): ${src}`);
    return;
  }

  const beforeBytes = statSync(fullSrc).size;
  const tmpOut = fullSrc + ".tmp.webp";

  try {
    let pipeline = sharp(fullSrc);
    const meta = await pipeline.metadata();
    const maxWidth = options.maxWidth ?? 1600;
    if (meta.width && meta.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }
    const quality = options.quality ?? 78;
    await pipeline.webp({ quality, effort: 5 }).toFile(tmpOut);
    const afterBytes = statSync(tmpOut).size;

    if (afterBytes < beforeBytes * 0.9) {
      const backupName = src.replace(/[\\/]/g, "_");
      renameSync(fullSrc, join(BACKUP, backupName));
      renameSync(tmpOut, fullSrc);
      console.log(`OK  ${src}: ${kb(beforeBytes)} -> ${kb(afterBytes)} (saved ${kb(beforeBytes - afterBytes)})`);
    } else {
      try { unlinkSync(tmpOut); } catch {}
      console.log(`--  ${src}: already optimal (${kb(beforeBytes)} -> ${kb(afterBytes)})`);
    }
  } catch (err) {
    try { unlinkSync(tmpOut); } catch {}
    console.error(`ERR ${src}: ${err.message}`);
  }
}

async function convertPngToWebp(pngSrc, webpDest, options = {}) {
  const fullSrc = join(PUBLIC, pngSrc);
  const fullDest = join(PUBLIC, webpDest);
  if (!existsSync(fullSrc)) {
    console.log(`skipping PNG (not found): ${pngSrc}`);
    return;
  }
  if (existsSync(fullDest)) {
    console.log(`skip (already exists): ${webpDest}`);
    return;
  }
  const beforeBytes = statSync(fullSrc).size;
  try {
    let pipeline = sharp(fullSrc);
    const meta = await pipeline.metadata();
    const maxWidth = options.maxWidth ?? 1600;
    if (meta.width && meta.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }
    const quality = options.quality ?? 78;
    await pipeline.webp({ quality, effort: 5 }).toFile(fullDest);
    const afterBytes = statSync(fullDest).size;
    console.log(`PNG ${pngSrc} -> ${webpDest}: ${kb(beforeBytes)} -> ${kb(afterBytes)}`);
  } catch (err) {
    console.error(`ERR ${pngSrc}: ${err.message}`);
  }
}

console.log("Compressing images...\n");

// LCP / heaviest images (Lighthouse flagged)
await compress("Tangent.webp",                  { maxWidth: 1400, quality: 75 });
await compress("hearo-product-visual-03.webp",  { maxWidth: 1400, quality: 80 });
await compress("zero-co-speaker-visual-01.webp",{ maxWidth: 1400, quality: 78 });
await compress("hearo-product-visual-01.webp",  { maxWidth: 1200, quality: 78 });
await compress("mood-product-visual-02.webp",   { maxWidth: 1200, quality: 80 });
await compress("Portronics2.webp",              { maxWidth: 900,  quality: 80 });

// Other large WebP images
await compress("hearo-product-visual-02.webp",  { maxWidth: 1400, quality: 78 });
await compress("hearo-product-visual-04.webp",  { maxWidth: 1400, quality: 78 });
await compress("hearo-product-visual-05.webp",  { maxWidth: 1400, quality: 78 });
await compress("hearo-product-visual-06.webp",  { maxWidth: 1400, quality: 78 });
await compress("zero-co-speaker-visual-02.webp",{ maxWidth: 1200, quality: 78 });
await compress("zero-co-speaker-visual-03.webp",{ maxWidth: 1200, quality: 78 });
await compress("zero-co-speaker-visual-04.webp",{ maxWidth: 1200, quality: 78 });
await compress("zero-co-speaker-visual-05.webp",{ maxWidth: 1200, quality: 78 });
await compress("zero-co-speaker-visual-06.webp",{ maxWidth: 1200, quality: 78 });
await compress("zero-co-speaker-visual-07.webp",{ maxWidth: 1200, quality: 78 });
await compress("mood-product-visual-01.webp",   { maxWidth: 1400, quality: 78 });
await compress("mood-product-visual-03.webp",   { maxWidth: 1400, quality: 78 });
await compress("mood-product-visual-04.webp",   { maxWidth: 1400, quality: 78 });
await compress("mood-product-visual-05.webp",   { maxWidth: 1400, quality: 78 });
await compress("mood-product-visual-06.webp",   { maxWidth: 1200, quality: 78 });
await compress("Portronics.webp",               { maxWidth: 1200, quality: 80 });
await compress("Portronics1.webp",              { maxWidth: 1000, quality: 80 });
await compress("Portronics3.webp",              { maxWidth: 900,  quality: 80 });
await compress("GullyLab (1).webp",             { maxWidth: 1200, quality: 78 });
await compress("GullyLab (2).webp",             { maxWidth: 1200, quality: 78 });
await compress("GullyLab (3).webp",             { maxWidth: 1200, quality: 78 });
await compress("GullyLab (4).webp",             { maxWidth: 1200, quality: 78 });
await compress("GullyLab (5).webp",             { maxWidth: 1200, quality: 78 });
await compress("foldenlane.webp",               { maxWidth: 1400, quality: 78 });
await compress("aboutme.webp",                  { maxWidth: 900,  quality: 82 });
await compress("gullylab-carousel.webp",        { maxWidth: 900,  quality: 78 });
await compress("outer-furniture-campaign-scene.webp",  { maxWidth: 1200, quality: 78 });
await compress("outer-furniture-product-angle.webp",   { maxWidth: 1200, quality: 78 });
await compress("outer-furniture-table-detail.webp",    { maxWidth: 1200, quality: 78 });
await compress("outer-furniture-material-detail.webp", { maxWidth: 1200, quality: 78 });

// TGD Audio
await compress("TGD/Final.webp",    { maxWidth: 1400, quality: 78 });
await compress("TGD/Front.webp",    { maxWidth: 1400, quality: 78 });
await compress("TGD/TopDown.webp",  { maxWidth: 1400, quality: 78 });
await compress("TGD/BottomTop.webp",{ maxWidth: 1400, quality: 78 });

// Convert massive PNGs (8-11 MB each) used in Outer project to WebP
await convertPngToWebp("this is it.png",    "this-is-it.webp",     { maxWidth: 1600, quality: 78 });
await convertPngToWebp("this is it2nd.png", "this-is-it-2nd.webp", { maxWidth: 1600, quality: 78 });
await convertPngToWebp("this is it3nd.png", "this-is-it-3rd.webp", { maxWidth: 1600, quality: 78 });
await convertPngToWebp("this is it4nd.png", "this-is-it-4th.webp", { maxWidth: 1600, quality: 78 });

console.log("\nDone! Originals backed up to public/_originals/");
