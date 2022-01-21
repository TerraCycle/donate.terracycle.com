const site = require("../../../_data/site");
const charityName = "The Green Centre";
const charityPrograms = [
    {
        name: "The Marigold® Gloves Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Marigold® durable gloves, Marigold® disposable gloves, Marigold® glove plastic packaging",
        imageFilename: "Marigold_AW-Image-Mobile_UK.jpeg",
    },
    {
        name: "The Baylis &amp; Harding Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Baylis &amp; Harding pumps, caps, flexible plastic lotion tubes + caps, and Baylis &amp; Harding Goodness hand wash refill pouches (excluding cardboard)",
        imageFilename: "BH_AW-Image-Mobile.jpg",
    },
    {
        name: "The Good Refill Pouch Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Aussie, Bear Fruits, Head &amp; Shoulders, Herbal Essences and Pantene: shampoo refill pouches, hair mask pouches, flexible tubes, triggers and pumps",
        imageFilename: "P_G_AW-Image-Mobile.jpg",
    },
    {
        name: "The Taylors of Harrogate Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Taylors of Harrogate branded coffee bean pouches, ground coffee pouches, or individual coffee bag sachets",
        imageFilename: "TOH_AW-Image-Mobile.jpg",
    },
    {
        name: "The Babybel® Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description:
            "Babybel® net bags, bag label and metal clasp, individual Babybel® wrappers, Babybel® wax, Babybel® Mini Rolls flexible plastic packaging and Mini Roll sleeves and plastic trays",
        imageFilename: "Bel_AW-Image-Mobile.jpg",
    },
    {
        name: "The Pilgrims Choice® Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Any brand of flexible plastic cheese pouches and packaging; any brand of sliced cheese protective plastic film",
        imageFilename: "Pilgrims-choice_AW-Image-Mobile.jpeg",
    },
    {
        name: "The Ferrero Pralines Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description:
            "Any Ferrero Rocher and Ferrero Collection aluminum wrappers, transparent plastic box and outer plastic wrappers, gold plastic tray, and Ferrero Rocher chocolate bar aluminum wrappers",
        imageFilename: "Ferrero_AW-Image-Mobile-UK.jpg",
    },
    {
        name: "The L.O.L. Surprise!™ Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "L.O.L. Surprise!™ products, packaging and accessories",
        imageFilename: "LOL-Surprise_AW-Image-Mobile.jpeg",
    },
    {
        name: "The Kinder Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Kinder flexible plastic packaging, Kinder chocolate wrappers, Kinder aluminum foil packaging, Kinder rigid plastic packaging",
        imageFilename: "Kinder_AW-Image-Mobile.jpeg",
    },
    {
        name: "The PopSockets® Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "All PopSockets® products and packaging, and all brands of plastic phone cases",
        imageFilename: "Popsockets-AW-Image-Mobile_UK-v1.jpeg",
    },
    {
        name: "The Ueshima Coffee Company Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Ueshima Coffee Company coffee beans and ground coffee pouches, Ueshima Coffee Company coffee bag sachets, Ueshima Coffee Company aluminium capsules",
        imageFilename: "Ueshima_AW-Image-Mobile_UK_V1.jpeg",
    },
];

module.exports = () => {
    return {
        data: {
            lang: "en-GB",
            head: {
                title: charityName,
                meta: {
                    description: `Raise money for your favorite charity by recycling for free. ${site.brandName} is opening several recycling programmes for participation through 2022.`,
                },
            },
            header: {
                title: `Raise money for <strong>${charityName}</strong> by recycling for free`,
                paragraphs: [`Send ${site.brandName}® your waste (free&nbsp;shipping) to be recycled;`, `${site.brandName} will donate £2 to <strong>${charityName}</strong>`],
            },
            introduction: {
                charityLogoFileName: "", // ⚠️ Missing logo!
                paragraphs: [
                    `You can donate to <strong>${charityName}</strong> by recycling through ${site.brandName} <em>at no cost to you!</em> By sending your waste to ${site.brandName} (free&nbsp;shipping), you’ll make a positive impact on the environment and support <strong>${charityName}</strong>. Send your used, hard-to-recycle products and packaging to ${site.brandName}, and they’ll donate £2 per shipment received to <strong>${charityName}</strong>.`,
                    `${site.brandName} is opening ${charityPrograms.length} recycling programmes for participation through 2022.`,
                ],
                button: {
                    label: ["Get Your Free Shipping Label", "Donate at Zero Cost to You!"],
                },
            },
            howItWorks: {
                title: "How It Works",
                steps: [
                    {
                        title: "Choose what to recycle",
                        text: `Each programme recycles one category of waste, so make sure to review the list of programmes to find the best fit for you! You can use as many programmes as you wish.`,
                        iconFilename: "Select Icon.svg",
                    },
                    {
                        title: "Ship for free",
                        text: `When you’re done collecting, download FREE shipping labels.`,
                        iconFilename: "Download laptop icon.svg",
                    },
                    {
                        title: `Send your collections to ${site.brandName}`,
                        text: `PRO TIP: Make sure your items are dry when you ship.`,
                        iconFilename: "Box icon.svg",
                    },
                    {
                        title: `${site.brandName} donates £2 per recycling shipment`,
                        text: `Just like that, you've donated to <strong>${charityName}</strong> at no cost to you.`,
                        iconFilename: "Donate icon.svg",
                    },
                    {
                        title: "Repeat!",
                        text: `If you would like to recycle through multiple programmes, please download a new shipping label for each programme and send the waste in separate boxes.`,
                        iconFilename: "Repeat icon.svg",
                    },
                ],
                previousStep: "previous step",
                nextStep: "next step",
                closingSentence: "The bigger the shipment size, the more efficient and the lower the environmental impact transporation will have.",
            },
            about: {
                title: `About <strong>${charityName}</strong>`,
                paragraphs: [
                    `Our mission is to provide carefully researched and qualified information and advice, to all members of the community on matters that have an effect on the future of our planet, locally, nationally and globally. The essence of our work is to enable you to develop your relationship with the planet. We believe this begins with a peaceful and respectful relationship with yourself and with others. In our work, we are, at all times, in everything we do, mindful of our impact on the planet.`,
                ],
            },
            exploreWhatYouCanRecycle: {
                title: "Explore What You Can Recycle",
                paragraphs: [
                    `Browse through the programme tiles to view the “unrecyclable” items that ${site.brandName} can accept.`,
                    `If you would like to recycle through multiple programmes, <strong>please download a new shipping label for each programme and please send the waste corresponding to each programme in separate boxes</strong>.`,
                    `This helps ${site.brandName} recycle efficiently. You can download as many free shipping labels as you need.`,
                ],
                programs: charityPrograms,
                seeAllButtonLabel: "See All",
                seeLessButtonLabel: "See Less",
            },
            widgetSection: {
                heading: "Get Your Free Shipping Label + Donate at Zero Cost to You",
                // ⚠️ Important: please join lines before pasting the code! E.g. https://convert-tool.com/conversion/join-lines
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="57d57056-cd31-459d-9d65-dfc733c86d96" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/en-GB/sdk_v2.js","terracycle"); </script>',
            },
            footer: {
                link: {
                    privacyPolicy: {
                        text: "Privacy Policy",
                        href: "https://www.terracycle.com/en-GB/pages/privacy-policy-uk",
                    },
                    termsOfUse: {
                        text: "Terms of Use",
                        href: "https://www.terracycle.com/en-GB/pages/terms-and-conditions-uk",
                    },
                },
                copyright: `Copyright ${site.brandName}© 2021. All Rights Reserved`,
            },
        },
    };
};
