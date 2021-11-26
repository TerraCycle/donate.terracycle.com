const site = require("../../../_data/site");
const charityName = "Charity"; // ⚠️ Variable content
const charityPrograms = [
    {
        name: "Programme de compostage des capsules Eco Caps Lavazza et des dosettes souples Carte Noire", // ✅ Fixed content
        descriptionTitle: "Ce que vous pouvez recycler :", // ✅ Fixed content
        description: // ✅ Fixed content
            "Capsules compostables Eco Caps Lavazza compatibles avec les machines Nespresso® et dosettes souples compostables de la marque Carte Noire",
        imageFilename: "Lavazza_AW-Image-Mobile_UK.jpg", // ✅ Fixed content
    },
    {
        name: "Programme de recyclage des recharges responsables de shampoing", // ✅ Fixed content
        descriptionTitle: "Ce que vous pouvez recycler:", // ✅ Fixed content
        description: // ✅ Fixed content
            "Recharges de shampoing, emballages de masques capillaires, tubes flexibles, pompes et déclencheurs Aussie, Head & Shoulders, Herbal Essences, Pantene et Bear Fruits ",
        imageFilename: "P&G_AW-Image-Mobile_UK.jpg", // ✅ Fixed content
    },
    {
        name: "Programme de recyclage des sachets micro-ondables Ben's Original™", // ✅ Fixed content
        descriptionTitle: "Ce que vous pouvez recycler:", // ✅ Fixed content
        description: "Les sachets de riz micro-ondables Ben’s Original™ et d’autres marques", // ✅ Fixed content
        imageFilename: "BensOriginal_AW-Image-Mobile_UK.jpg", // ✅ Fixed content
    },
    {
        name: "Programme de recyclage Céréal Bio", // ✅ Fixed content
        descriptionTitle: "Ce que vous pouvez recycler:", // ✅ Fixed content
        description: // ✅ Fixed content
            "Sachets micro-ondables Céréal Bio, emballages en plastique souple de la gamme des galettes Céréal Bio (carton non inclus)",
        imageFilename: "CerealBio_AW-Image-Mobile_UK.jpg", // ✅ Fixed content
    },
    {
        name: "Programme de recyclage Good Goût®", // ✅ Fixed content
        descriptionTitle: "Ce que vous pouvez recycler:", // ✅ Fixed content
        description: // ✅ Fixed content
            "Gourdes de fruits, légumes et brassés (bouchons inclus), emballages de carrés, galettes de riz, céréales et muesli, cookies et biscuits animaux, emballages souples et assiettes de plats cuisinés (carton non inclus)",
        imageFilename: "GoodGout_AW-Image-Mobile_UK.jpg", // ✅ Fixed content
    },
    {
        name: "Programme de recyclage des emballages Babybio et Vitabio", // ✅ Fixed content
        descriptionTitle: "Ce que vous pouvez recycler:", // ✅ Fixed content
        description: // ✅ Fixed content
            "Gourdes Babybio et Vitabio (bouchons inclus), sachets souples Babybio, assiettes et bols de plats préparés Babybio (carton non inclus)",
        imageFilename: "Vitabio_AW-Image-Mobile_UK.jpg", // ✅ Fixed content
    },
    {
        name: "Programme de recyclage Chupa Chups et Mentos", // ✅ Fixed content
        descriptionTitle: "Ce que vous pouvez recycler:", // ✅ Fixed content
        description: // ✅ Fixed content
            "Papiers d’emballages en plastique de sucettes, bâtons en plastique de sucettes, sachets en plastique contenant des sucettes de toutes marques, emballages en plastique de bonbons Mentos®",
        imageFilename: "CubbaCubba_AW-Image-Mobile_UK.jpg",
    },
];

module.exports = () => {
    return {
        data: {
            lang: "fr-FR",
            head: {
                title: charityName,
                meta: { // ✅ Fixed content
                    description: `Envoyez des dons à votre association ou votre école préférée en recyclant gratuitement. Jusqu’à la fin de l’année, ${site.brandName} vous propose de participer à différents programmes de recyclage.`,
                },
            },
            header: {
                title: `Collecter des dons pour ${charityName}`, // ⚠️ Variable content
            },
            introduction: {
                charityLogoFileName: "TC Charity Microsite - Charity Logo Resize, US, Mobile_Philabundance.jpg", // ⚠️ Second logo is a variable
                paragraphs: [ // ⚠️ Variable content
                    `Pendant les fêtes de fin d'année, faites un don à ${charityName} en recyclant gratuitement avec ${site.brandName}! En envoyant vos déchets à ${site.brandName} (frais d'envoi gratuits), vous agissez positivement pour l'environnement et aidez ${charityName}. Envoyez vos déchets d'emballages à ${site.brandName}, qui fera don de 10 euros à ${charityName} pour chaque colis reçu.`,
                    `Jusqu'à la fin de l'année, ${site.brandName} vous propose de participer à 7 programmes de recyclage. Pour avoir le temps de traiter votre envoi et nous assurer que nous recevons le maximum de dons, commencez à collecter vos déchets dès aujourd'hui et envoyez-les au plus tard le 15 décembre.`,
                ],
                button: { // ✅ Fixed content
                    label: ["Obtenez votre étiquette d'expédition gratuite", "Faites un don gratuitement!"],
                },
            },
            howItWorks: {
                title: "Comment ça marche", // ✅ Fixed content
                steps: [
                    { // ✅ Fixed content
                        title: "Choisissez ce que vous voulez recycler",
                        text: "Chaque programme de recyclage est dédié à une catégorie de déchets en particulier, alors n'hésitez pas à consulter la liste des programmes pour trouver celui qui vous convient le mieux ! Vous pouvez rejoindre autant de programmes que vous le souhaitez.",
                        iconFilename: "Select Icon.svg",
                    },
                    { // ✅ Fixed content
                        title: "Expédition gratuite",
                        text: "Lorsque vous avez finalisé votre collecte, téléchargez des étiquettes d'expédition GRATUITES.",
                        iconFilename: "Download laptop icon.svg",
                    },
                    { // ✅ Fixed content
                        title: `Envoyez vos déchets collectés à ${site.brandName}`,
                        text: "CONSEIL : Assurez-vous que vos emballages sont secs avant de les expédier.",
                        iconFilename: "Box icon.svg",
                    },
                    { // ⚠️ Variable content
                        title: `${site.brandName} reverse 10 euros par colis reçu.`,
                        text: `Et hop, vous venez de faire un don à ${charityName} gratuitement!`,
                        iconFilename: "Donate icon.svg",
                    },
                    { // ✅ Fixed content
                        title: "Répétez!",
                        text: "Si vous souhaitez recycler dans le cadre de plusieurs programmes, veuillez télécharger une nouvelle étiquette d'expédition pour chaque programme et envoyer les déchets dans des boîtes séparées.",
                        iconFilename: "Repeat icon.svg",
                    },
                ],
                previousStep: "étape précédente", // ✅ Fixed content
                nextStep: "étape suivante", // ✅ Fixed content
                closingSentence: // ⚠️ Variable content
                    `N'oubliez pas d'expédier vos emballages <strong>au plus tard le 15 décembre</strong> pour que ${charityName} reçoive le plus de dons possible de la part de ${site.brandName}. Les envois reçus après le 31 décembre ne pourront bénéficier que des activations standard offertes.`,
            },
            about: {
                title: `À propos de ${charityName}`, // ⚠️ Variable content
                paragraphs: [ // ⚠️ Variable content
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ],
            },
            exploreWhatYouCanRecycle: {
                title: "Voir ce que vous pouvez recycler", // ✅ Fixed content
                paragraphs: [ // ✅ Fixed content
                    `Parcourez les pages du programme pour voir les articles "non recyclables" que ${site.brandName} peut accepter. Si vous souhaitez recycler dans le cadre de plusieurs programmes, <strong>veuillez télécharger une nouvelle étiquette d'expédition pour chaque programme et envoyer les déchets dans des boîtes séparées.</strong> Cela permet à ${site.brandName} de recycler efficacement. Vous pouvez télécharger autant d'étiquettes d'expédition gratuites que vous le souhaitez.`
                ],
                programs: charityPrograms,
                seeAllButtonLabel: "Voir tout", // ✅ Fixed content
                seeLessButtonLabel: "Voir moins", // ✅ Fixed content
            },
            widgetSection: {
                heading: "Obtenez votre étiquette d'expédition gratuite + Faites un don gratuitement!", // ✅ Fixed content
                // ⚠️ Important: please join lines before pasting the code! E.g. https://convert-tool.com/conversion/join-lines
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="1a2ad364-421a-413f-a290-5535e5dd7153" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/en-US/sdk_v2.js","terracycle"); </script>',
            },
            footer: {
                link: {
                    privacyPolicy: { // ✅ Fixed content
                        text: "Politique de confidentialité",
                        href: "https://www.terracycle.com/fr-FR/pages/politique-de-confidentialite",
                    },
                    termsOfUse: { // ✅ Fixed content
                        text: "Conditions générales d'utilisation",
                        href: "https://www.terracycle.com/fr-FR/pages/conditions-d-utilisation",
                    }
                },
                copyright: `Copyright ${site.brandName}© 2021. Tous droits réservés.`, // ✅ Fixed content
            },
        },
    };
};
