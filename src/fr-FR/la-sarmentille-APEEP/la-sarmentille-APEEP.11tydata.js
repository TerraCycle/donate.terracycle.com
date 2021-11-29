const site = require("../../../_data/site");
const charityName = "La Sarmentille APEEP";
const charityNameDefiniteArticle = "";
const charityPrograms = [
    {
        name: "Programme de compostage Lavazza et Carte Noire",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Capsules compostables Eco Caps Lavazza compatibles avec les machines Nespresso® et dosettes souples compostables de la marque Carte Noire",
        imageFilename: "Lavazza_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage des soins capillaires",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description:
            "Recharges de shampoing, emballages de masques capillaires, tubes flexibles, pompes et déclencheurs Aussie, Head & Shoulders, Herbal Essences, Pantene et Bear Fruits ",
        imageFilename: "P&G_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage Ben's Original™",
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
        description:
            "Gourdes de fruits, légumes et brassés (bouchons inclus), emballages de carrés, galettes de riz, céréales et muesli, cookies et biscuits animaux, emballages souples et assiettes de plats cuisinés (carton non inclus)",
        imageFilename: "GoodGout_AW-Image-Mobile_UK.jpg",
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
        description:
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
                meta: {
                    description: `Envoyez des dons à votre association ou votre école préférée en recyclant gratuitement. Jusqu’à la fin de l’année, ${site.brandName} vous propose de participer à différents programmes de recyclage.`,
                },
            },
            header: {
                title: `Collecter des dons pour <strong>${charityNameDefiniteArticle}${charityName}</strong>`,
            },
            introduction: {
                charityLogoFileName: "TC Charity Microsite - Charity Logo Resize, FR, Mobile_La Sarmentille.jpg",
                paragraphs: [
                    `Pendant les fêtes de fin d'année, faites un don à <strong>${charityNameDefiniteArticle}${charityName}</strong> en recyclant gratuitement avec ${site.brandName} ! En envoyant vos déchets à ${site.brandName} (frais d'envoi gratuits), vous agissez positivement pour l'environnement et aidez <strong>${charityNameDefiniteArticle}${charityName}</strong>. Envoyez vos déchets d'emballages à ${site.brandName}, qui fera don de 10 euros à <strong>${charityNameDefiniteArticle}${charityName}</strong> pour chaque colis reçu.`,
                    "Pour avoir le temps de traiter votre envoi et nous assurer que nous recevons le maximum de dons, commencez à collecter vos déchets dès aujourd'hui et envoyez-les <strong>au plus tard le 15 décembre</strong>.",
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
                        text: `Et hop, vous venez de faire un don à <strong>${charityNameDefiniteArticle}${charityName}</strong> gratuitement !`,
                        iconFilename: "Donate icon.svg",
                    },
                    {
                        title: "Répétez!",
                        text: "Si vous souhaitez recycler dans le cadre de plusieurs programmes, veuillez télécharger une nouvelle étiquette d'expédition pour chaque programme et envoyer les déchets dans des boîtes séparées.",
                        iconFilename: "Repeat icon.svg",
                    },
                ],
                previousStep: "étape précédente",
                nextStep: "étape suivante",
                closingSentence: `N'oubliez pas d'expédier vos emballages <strong>au plus tard le 15 décembre</strong> pour que <strong>${charityNameDefiniteArticle}${charityName}</strong> reçoive le plus de dons possible de la part de ${site.brandName}. Les envois reçus après le 31 décembre ne pourront bénéficier que des activations standard offertes.`,
            },
            about: {
                title: `À propos de <strong>${charityNameDefiniteArticle}${charityName}</strong>`,
                paragraphs: [
                    "L'association a pour vocation d'aider l'école et mener à bien le projet d'école en subventionnant les différentes sorties scolaires, les spectacles, l'achat de matériel, etc.",
                    "Pour cela, elle organise différentes manifestations pour récolter des fonds. Tous les parents d'enfants de l'école sont donc les bienvenus pour les aider dans cette tâche.",
                ],
            },
            exploreWhatYouCanRecycle: {
                title: "Voir ce que vous pouvez recycler",
                paragraphs: [
                    `Parcourez les pages du programme pour voir les articles "non recyclables" que ${site.brandName} peut accepter. Si vous souhaitez recycler dans le cadre de plusieurs programmes, <strong>veuillez télécharger une nouvelle étiquette d'expédition pour chaque programme et envoyer les déchets dans des boîtes séparées.</strong> Cela permet à ${site.brandName} de recycler efficacement. Vous pouvez télécharger autant d'étiquettes d'expédition gratuites que vous le souhaitez.`,
                ],
                programs: charityPrograms,
                seeAllButtonLabel: "Voir tout",
                seeLessButtonLabel: "Voir moins",
            },
            widgetSection: {
                heading: "Obtenez votre étiquette d'expédition gratuite + Faites un don gratuitement!",
                // ⚠️ Important: please join lines before pasting the code! E.g. https://convert-tool.com/conversion/join-lines
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="b328a8b5-c05a-4916-8fc1-d5a3d2c779dd" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/fr-FR/sdk_v2.js","terracycle"); </script>',
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
                    },
                },
                copyright: `Copyright ${site.brandName}© 2021. Tous droits réservés.`,
            },
        },
    };
};
