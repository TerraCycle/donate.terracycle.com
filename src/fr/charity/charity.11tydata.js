const site = require("../../../_data/site");
const charityName = "Charity";
const charityPrograms = [
    {
        name: "Programme de compostage des capsules Eco Caps Lavazza et des dosettes souples Carte Noire",
        descriptionTitle: "Ce que vous pouvez recycler :",
        description: "Capsules compostables Eco Caps Lavazza compatibles avec les machines Nespresso® et dosettes souples compostables de la marque Carte Noire",
        imageFilename: "Lavazza_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage des recharges responsables de shampoing",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Recharges de shampoing, emballages de masques capillaires, tubes flexibles, pompes et déclencheurs Aussie, Head & Shoulders, Herbal Essences, Pantene et Bear Fruits ",
        // ⚠️ Task: Missing mobile image!
        imageFilename: "P&G_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage des sachets micro-ondables Ben's Original™",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Les sachets de riz micro-ondables Ben’s Original™ et d’autres marques",
        imageFilename: "BensOriginal_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage Céréal Bio",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Sachets micro-ondables Céréal Bio, emballages en plastique souple de la gamme des galettes Céréal Bio (carton non inclus)",
        imageFilename: "CerealBio_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage Good Goût®",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Gourdes de fruits, légumes et brassés (bouchons inclus), emballages de carrés, galettes de riz, céréales et muesli, cookies et biscuits animaux, emballages souples et assiettes de plats cuisinés (carton non inclus)",
        imageFilename: "Good_Gout_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage des emballages Babybio et Vitabio",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Gourdes Babybio et Vitabio (bouchons inclus), sachets souples Babybio, assiettes et bols de plats préparés Babybio (carton non inclus)",
        imageFilename: "Vitabio_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage Chupa Chups et Mentos",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Papiers d’emballages en plastique de sucettes, bâtons en plastique de sucettes, sachets en plastique contenant des sucettes de toutes marques, emballages en plastique de bonbons Mentos®",
        imageFilename: "Cubba Cubba_AW-Image-Mobile_UK.jpg",
    },
];

module.exports = () => {
    return {
        data: {
            lang: "fr",
            head: {
                title: charityName,
                meta: {
                    description: `Raise money for your favorite charity by recycling for free. TerraCycle is opening several recycling programs for participation through the end of the year.`,
                },
            },
            header: {
                title: "Collecter des dons pour Charity",
                // ⚠️ Task: Ask for about header paragraph!
                paragraphs: "",
            },
            introduction: {
                charityLogoFileName: "TC Charity Microsite - Charity Logo Resize, US, Mobile_Philabundance.jpg",
                paragraphs: [
                    `Pendant les fêtes de fin d'année, faites un don à <strong>${charityName}</strong> en recyclant gratuitement avec ${site.brandName}! En envoyant vos déchets à ${site.brandName} (frais d'envoi gratuits), vous agissez positivement pour l'environnement et aidez <strong>${charityName}</strong>. Envoyez vos déchets d'emballages à ${site.brandName}, qui fera don de 10 euros à <strong>${charityName}</strong> pour chaque colis reçu.`,
                    `Jusqu'à la fin de l'année, ${site.brandName} vous propose de participer à 7 programmes de recyclage. Pour avoir le temps de traiter votre envoi et nous assurer que nous recevons le maximum de dons, commencez à collecter vos déchets dès aujourd'hui et envoyez-les au plus tard le 15 décembre.`,
                ],
                button: {
                    label: ["Obtenez votre étiquette d'expédition gratuite", "Faites un don gratuitement!"],
                },
            },
            howItWorks: {
                title: "Comment ça marche",
                steps: [
                    {
                        title: "Choisissez ce que vous voulez recycler",
                        text: "Chaque programme de recyclage est dédié à une catégorie de déchets en particulier, alors n'hésitez pas à consulter la liste des programmes pour trouver celui qui vous convient le mieux ! Vous pouvez rejoindre autant de programmes que vous le souhaitez.",
                        iconFilename: "Select Icon.svg",
                    },
                    {
                        title: "Expédition gratuite",
                        text: "Lorsque vous avez finalisé votre collecte, téléchargez des étiquettes d'expédition GRATUITES.",
                        iconFilename: "Download laptop icon.svg",
                    },
                    {
                        title: `Envoyez vos déchets collectés à ${site.brandName}`,
                        text: "CONSEIL : Assurez-vous que vos emballages sont secs avant de les expédier.",
                        iconFilename: "Box icon.svg",
                    },
                    {
                        title: `${site.brandName} reverse 10 euros par colis reçu.`,
                        text: `Et hop, vous venez de faire un don à <strong>${charityName}</strong> gratuitement!`,
                        iconFilename: "Donate icon.svg",
                    },
                    {
                        title: "Répétez!",
                        text: "Si vous souhaitez recycler dans le cadre de plusieurs programmes, veuillez télécharger une nouvelle étiquette d'expédition pour chaque programme et envoyer les déchets dans des boîtes séparées.",
                        iconFilename: "Repeat icon.svg",
                    },
                ],
                previousStep: "previous step",
                nextStep: "next step",
                closingSentence: `N'oubliez pas d'expédier vos emballages <strong>au plus tard le 15 décembre</strong> pour que <strong>${charityName}</strong> reçoive le plus de dons possible de la part de ${site.brandName}. Les envois reçus après le 31 décembre ne pourront bénéficier que des activations standard offertes.`,
            },
            about: {
                title: `À propos de ${charityName}`,
                // ⚠️ Task: Ask for about paragraph!
                paragraphs: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
            },
            exploreWhatYouCanRecycle: {
                title: "Voir ce que vous pouvez recycler",
                paragraphs: [`Parcourez les pages du programme pour voir les articles "non recyclables" que ${site.brandName} peut accepter. Si vous souhaitez recycler dans le cadre de plusieurs programmes, <strong>veuillez télécharger une nouvelle étiquette d'expédition pour chaque programme et envoyer les déchets dans des boîtes séparées.</strong> Cela permet à ${site.brandName} de recycler efficacement. Vous pouvez télécharger autant d'étiquettes d'expédition gratuites que vous le souhaitez.`],
                programs: charityPrograms,
                // ⚠️ Task: Ask for button labels!
                seeAllButtonLabel: "See All",
                seeLessButtonLabel: "See Less",
            },
            widgetSection: {
                // ⚠️ Task: Ask for widgetSection/heading labels!
                heading: "Get Your Free Shipping Label + Donate at Zero Cost to You",
                // ⚠️ Important: please join lines before pasting the code! E.g. https://convert-tool.com/conversion/join-lines
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="1a2ad364-421a-413f-a290-5535e5dd7153" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/en-US/sdk_v2.js","terracycle"); </script>',
            },
            footer: {
                link: {
                    privacyPolicy: {
                        text: "Politique de confidentialité",
                        href: "https://www.terracycle.com/fr-FR/pages/politique-de-confidentialite",
                    },
                    termsOfUse: {
                        text: "Conditions générales d'utilisation",
                        href: "https://www.terracycle.com/fr-FR/pages/conditions-d-utilisation",
                    }
                },
                // ⚠️ Task: Ask for footer/copyright translate!
                copyright: `Copyright ${site.brandName}© 2021. All Rights Reserved`,
            },
        },
    };
};
