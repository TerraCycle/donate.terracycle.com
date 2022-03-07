const site = require("../../../_data/site");
const charityName = "Association des Sclérodermiques de France";
const charityNameDefiniteArticle = "l'";
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
    {
        name: "Programme de recyclage des gants fins ménagers MAPA®",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Gants fins ménagers achetés pour un usage domestiqueuniquement (comme pour le ménage, le bricolage, la cuisine, l’hygiène ou le jardinage)",
        imageFilename: "Mapa_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage des capsules Lipton®",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Capsules Lipton® de thés et infusions compatibles avec les machines Nespresso® et Nescafé® Dolce Gusto® et tous les opercules placés sur les capsules",
        imageFilename: "Lipton_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage des soins dentaires Philips",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Têtes et couvercles de brosses à dents électriques, canules de jet dentaire (par exemple microjet dentaire), brossettes interdentaires et boite de fil dentaire",
        imageFilename: "Philips_AW-Image-Mobile_UK.jpg",
    },
    {
        name: "Programme de recyclage des jouets Hasbro",
        descriptionTitle: "Ce que vous pouvez recycler:",
        description: "Tous les jeux et jouets Hasbro (sauf jeux et jouets électroniques)",
        imageFilename: "Hasbro_AW-Image-Mobile_UK.jpg",
    },
];

module.exports = () => {
    return {
        data: {
            lang: "fr-FR",
            head: {
                title: charityName,
                meta: {
                    description: `C'est le Mois de la Terre et pour marquer le coup on vous invite à soutenir ${charityName} en recyclant vos déchets non recyclables grâce à TerraCycle ! C'est l'occasion de faire deux bonnes actions pour le prix d'une : soutenir une bonne cause, tout en évitant que des tas de déchets ne finissent dans les décharges.`,
                },
            },
            header: {
                title: `Collecter des dons pour <strong>${charityNameDefiniteArticle}${charityName}</strong>`,
            },
            introduction: {
                charityLogoFileName: "associations_des_sclerodermiques_de_france.jpg",
                charityLogoHeight: {
                    mobile: 80,
                    desktop: 140,
                },
                paragraphs: [
                    `À l'occasion du Mois de la Terre, faites un don à <strong>${charityNameDefiniteArticle}${charityName}</strong> en recyclant gratuitement avec TerraCycle®! En envoyant vos déchets à TerraCycle (frais d'envoi gratuits), vous agissez positivement pour l'environnement et aidez <strong>${charityNameDefiniteArticle}${charityName}</strong>. Pour chaque colis d'emballages reçu, TerraCycle fera un don de 5 euros à <strong>${charityNameDefiniteArticle}${charityName}</strong>.`,
                    `Jusqu'à la fin du mois d'avril, TerraCycle vous propose de participer à 11 programmes de recyclage. Pour avoir le temps de traiter votre envoi et nous assurer que nous recevons le maximum de dons, commencez à collecter vos déchets dès aujourd'hui et envoyez-les au plus tard le 30 avril.`
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
                        title: `${site.brandName} reverse 5 euros par colis reçu.`,
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
                closingSentence: "N'oubliez pas d'expédier vos emballages au plus tard le 30 avril pour que Charity reçoive le plus de dons possible de la part de TerraCycle. Les colis envoyés après le 30 avril ne pourront bénéficier que des activations standard offertes.",
            },
            about: {
                title: `À propos de <strong>${charityNameDefiniteArticle}${charityName}</strong>`,
                paragraphs: [
                    `L’${charityName} a été créée en 1989 pour aider les malades à mieux vivre avec la sclérodermie. L’ASF répond à vos questions sur la fatigue, la douleur, la diététique, la famille, le retentissement psychologique, comment parler de la maladie, le travail, les droits sociaux, prendre soin de soi, voyager, faire des projets… L’ASF rencontre et fait se rencontrer celles et ceux qui sont concernés par la sclérodermie. L’ASF organise des rencontres amicales, moments de convivialité et d’échanges, des conférences médicales qui permettent d’échanger directement avec des médecins, le Congrès annuel qui est l’occasion de suivre des ateliers d’éducation thérapeutiques, de rencontrer des malades de France entière et de s’informer sur l’évolution de la recherche.`,
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
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="89d79192-e446-4487-9f98-b5a052f1fae7" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/fr-FR/sdk_v2.js","terracycle"); </script>',
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
