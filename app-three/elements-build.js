const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  console.log('Building elements...');

  const rootFolder = './dist/app-three';
  const destFolder = './elements';
  const files = [

    `${rootFolder}/runtime-es2015.js`,
    `${rootFolder}/polyfills-es2015.js`,
    `${rootFolder}/main-es2015.js`,
  ];

  await fs.ensureDir(destFolder);

  await concat(files, `${destFolder}/app-three.js`);

  await fs.copyFile(`${rootFolder}/styles.css`, `${destFolder}/styles.css`);

  await fs.copy(rootFolder, destFolder,
    {
      filter:
        function (src, dest) {
          return src.indexOf('.js') === -1 && src.indexOf('styles.css') === -1;
        }
    });

  console.log('Finished building elements.')

})()
