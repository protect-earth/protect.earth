const fs = require('fs');
const yaml = require('js-yaml');
const slugify = require('slugify');

const srcLinksFolder = './src/data/links/';
const statamicActionsFolder = './api/content/collections/actions/';

const categorySlugIdMap = {
  'carbon-reduction': '207559a4-fe66-4c3d-bc6c-4f721f9562a4',
  clothing: 'f92ca585-ad4d-43bc-9430-43c2fad14aa1',
  cooking: 'e71796f8-4b3d-4f40-a1a8-527fb0fdf854',
  'consumer-products': 'a68b7a57-c0a5-4b27-81d2-93a19f2787a1',
  documentaries: '49f0ae64-b03a-4d50-bbdc-edd765ef4500',
  food: '1e06ea25-373d-440c-9abd-408710b475d0',
  'footprint-calculators': '681bffaf-a44c-4449-ae96-bf780506c862',
  'home-improvements': '6ad9cfc5-eac0-455e-9ad0-f537896373ba',
  hygiene: '7adab10c-985b-42e2-ab8c-eee35b5a8817',
  jobs: '1fcc2840-32ba-44fb-9b99-efe4d1397ff4',
  'land-management': '411e32f8-59bc-4fbb-ac7f-3d2a908b039e',
  news: '0ec6e5b5-0a80-4c8d-b45f-b78c99492d8d',
  politics: '3d78ba9a-4f85-464b-a330-1cfb5c137328',
  reforestation: '63a7cfb3-7cd5-4282-af9d-e5ed41572d1b',
  'renewable-energy': 'f9b2c5ee-8da3-446b-b865-0d716debed30',
  transportation: '0a32cb28-6330-4881-8671-824476ed5859',
  travel: '97826809-ed97-424c-9c46-cedba824add8',
  volunteering: 'ee42a632-ac6a-4f89-802a-8111cf674d4c',
  'zero-waste': 'a1a4ac88-627d-4bc7-a5b5-d3dcdc10cc43',
};

fs.readdir(srcLinksFolder, (err, files) => {
  files.forEach(file => {
    const fileDate = file.match(/([0-9]{4}-[0-9]{2}-[0-9]{2})/)[0];

    const linkData = yaml.load(
      fs.readFileSync(`${srcLinksFolder}/${file}`, 'utf8')
    );

    const newActionData = {
      ...linkData,
      blueprint: 'action',
      categories: linkData.categories
        .map(slug => categorySlugIdMap[slug])
        .filter(id => id !== null),
    };

    const newActionMarkdown = `---\n${yaml.dump(newActionData)}\n---`;

    const newFilename = `${fileDate}.${slugify(linkData.title, {
      remove: /[*+~.()'"?!:@,]/g,
      lower: true,
    })}.md`;

    console.log(`creating ${newFilename}`);

    fs.writeFileSync(
      `${statamicActionsFolder}/${newFilename}`,
      newActionMarkdown,
      'utf8'
    );
  });
});
