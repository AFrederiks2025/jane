# Foto's voor Jane®

Plaats hier portretfoto's. De bestandsnaam moet gelijk zijn aan de `slug` in
`src/content/nl.ts` (en/of `en.ts`), zonder extensie. Voorkeur: vierkant
(1:1) of liggend (4:5), min. 600×600 px, format `.jpg` of `.webp`.

## coaches/

Voor de coaches op `/jane-instituut` en de homepage. Gebruik de naam-slug:
`jamila-de-jong.jpg`, `volke-hoekstra.jpg`, etc.

## experiences/

Voor de blog-portretten op `/ervaringen` en de detailpagina's. Slug komt
overeen met `experiencesData[i].slug`:

- `volke-hoekstra.jpg`
- `siebe-slagter.jpg`
- `sebastiaan-kuijt.jpg`
- `saskia-roelofsen.jpg`
- `richard-calandt.jpg`
- `rob-zigter-podcast.jpg`
- `andrea-cramer-kieboom.jpg`
- `marieke-van-de-vegt.jpg`
- `marten-schippers.jpg`
- `petra-van-gans.jpg`

Zodra een foto aanwezig is, gebruikt de site automatisch de foto in plaats
van de initialen-avatar (de Avatar-component valt terug op initialen
wanneer de foto nog niet bestaat — zie `src/components/Avatar.tsx`).
