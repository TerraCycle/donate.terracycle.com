const site = require("../../../_data/site");
const charityName = "Les Clowns Stéthoscopes";
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
                    description: `Envoyez des dons à votre association ou votre école préférée en recyclant gratuitement. ${site.brandName} vous propose de participer à différents programmes de recyclage.`,
                },
            },
            header: {
                title: `Collecter des dons pour <strong>${charityNameDefiniteArticle}${charityName}</strong>`,
            },
            introduction: {
                charityLogoFileName: "les_clowns_stethoscopes.jpg",
                charityLogoHeight: {
                    mobile: 60,
                    desktop: 77,
                },
                paragraphs: [
                    `Faites un don à <strong>${charityNameDefiniteArticle}${charityName}</strong> en recyclant gratuitement avec ${site.brandName} ! En envoyant vos déchets à ${site.brandName} (frais d'envoi gratuits), vous agissez positivement pour l'environnement et aidez <strong>${charityNameDefiniteArticle}${charityName}</strong>. Envoyez vos déchets d'emballages à ${site.brandName}, qui fera don de 2 euros à <strong>${charityNameDefiniteArticle}${charityName}</strong> pour chaque colis reçu.`,
                    `${site.brandName} vous propose de participer à ${charityPrograms.length} programmes de recyclage.`,
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
                        title: `${site.brandName} reverse 2 euros par colis reçu.`,
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
                closingSentence: "Plus votre colis est volumineux, plus nous gagnons en efficacité et minimisons l'impact sur l'environnement.",
            },
            about: {
                title: `À propos de <strong>${charityNameDefiniteArticle}${charityName}</strong>`,
                paragraphs: [
                    "L'association se donne pour mission de mener, en relation avec les équipes soignantes ou encadrantes, des interventions régulières d’artistes clowns dans des structures de soins et/ou des structures de soins spécialisées, sociales ou éducatives ; contribuer à améliorer la qualité de vie des personnes (enfants et/ou adultes) accueillies dans ces structures, quels que soient leurs troubles, et celle du personnel de ces structures ; proposer des formations en continu afin que les clowns puissent adapter leur pratique à l'univers hospitalier ; et enfin recueillir des financements pour pérenniser les interventions actuelles  et développer de nouveaux programmes d'interventions dans les services qui sont en attente de la venue des clowns.",
                ],
            },
            exploreWhatYouCanRecycle: {
                title: "Voir ce que vous pouvez recycler",
                paragraphs: [
                    `Parcourez les pages du programme pour voir les articles "non recyclables" que ${site.brandName} peut accepter. Si vous souhaitez recycler dans le cadre de plusieurs programmes, <strong>veuillez télécharger une nouvelle étiquette d'expédition pour chaque programme et envoyer les déchets dans des boîtes séparées.</strong>`,
                    `Cela permet à ${site.brandName} de recycler efficacement. Vous pouvez télécharger autant d'étiquettes d'expédition gratuites que vous le souhaitez.`,
                ],
                programs: charityPrograms,
                seeAllButtonLabel: "Voir tout",
                seeLessButtonLabel: "Voir moins",
            },
            widgetSection: {
                heading: "Obtenez votre étiquette d'expédition gratuite + Faites un don gratuitement!",
                // ⚠️ Important: please join lines before pasting the code! E.g. https://convert-tool.com/conversion/join-lines
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="31f80740-da31-40f6-8439-fc52c0e62f67" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/fr-FR/sdk_v2.js","terracycle"); </script>',
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
