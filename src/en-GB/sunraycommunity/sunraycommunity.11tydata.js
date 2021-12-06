const site = require("../../../_data/site");
const charityName = "Sunray Community";
const charityPrograms = [
    {
        name: "The Marigold® Gloves Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Marigold® durable gloves, Marigold® disposable gloves, Marigold® glove plastic packaging (min. weight 1kg)",
        imageFilename: "Marigold_AW-Image-Mobile_UK.jpeg",
    },
    {
        name: "The Baylis &amp; Harding Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Baylis &amp; Harding pumps, caps, flexible plastic lotion tubes + caps, and Baylis &amp; Harding Goodness hand wash refill pouches (excluding cardboard) (min. weight 1kg)",
        imageFilename: "BH_AW-Image-Mobile.jpg",
    },
    {
        name: "The Good Refill Pouch Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Aussie, Bear Fruits, Head &amp; Shoulders, Herbal Essences and Pantene: shampoo refill pouches, hair mask pouches, flexible tubes, triggers and pumps (min. weight 1kg)",
        imageFilename: "P_G_AW-Image-Mobile.jpg",
    },
    {
        name: "The Taylors of Harrogate Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Taylors of Harrogate branded coffee bean pouches, ground coffee pouches, or individual coffee bag sachets (min. weight 100g)",
        imageFilename: "TOH_AW-Image-Mobile.jpg",
    },
    {
        name: "The Babybel® Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description:
            "Babybel® net bags, bag label and metal clasp, individual Babybel® wrappers, Babybel® wax, Babybel® Mini Rolls flexible plastic packaging and Mini Roll sleeves and plastic trays (min. weight 500g)",
        imageFilename: "Bel_AW-Image-Mobile.jpg",
    },
    {
        name: "The Pilgrims Choice® Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Any brand of flexible plastic cheese pouches and packaging; any brand of sliced cheese protective plastic film (min. weight 1kg)",
        imageFilename: "Pilgrims-choice_AW-Image-Mobile.jpeg",
    },
    {
        name: "The Ferrero Pralines Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description:
            "Any Ferrero Rocher and Ferrero Collection aluminum wrappers, transparent plastic box and outer plastic wrappers, gold plastic tray, and Ferrero Rocher chocolate bar aluminum wrappers (min. weight 1kg)",
        imageFilename: "Ferrero_AW-Image-Mobile-UK.jpg",
    },
    {
        name: "The L.O.L. Surprise!™ Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "L.O.L. Surprise!™ products, packaging and accessories (min. weight 1kg)",
        imageFilename: "LOL-Surprise_AW-Image-Mobile.jpeg",
    },
    {
        name: "The Kinder Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Kinder flexible plastic packaging, Kinder chocolate wrappers, Kinder aluminum foil packaging, Kinder rigid plastic packaging (min. weight 1kg)",
        imageFilename: "Kinder_AW-Image-Mobile.jpeg",
    },
    {
        name: "The Ring Carrier Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "All flexible plastic ring carriers used to hold cans (min. weight 100g)",
        imageFilename: "Hi-Cone_AW-Image-Mobile_UK.jpeg",
    },
    {
        name: "The PopSockets® Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "All PopSockets® products and packaging, and all brands of plastic phone cases (min. weight 1kg)",
        imageFilename: "Popsockets-AW-Image-Mobile_UK-v1.jpeg",
    },
    {
        name: "The Ueshima Coffee Company Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Ueshima Coffee Company coffee beans and ground coffee pouches, Ueshima Coffee Company coffee bag sachets, Ueshima Coffee Company aluminium capsules (min. weight 200g)",
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
                    description: `Raise money for your favorite charity by recycling for free. ${site.brandName} is opening several recycling programmes for participation through the end of the year.`,
                },
            },
            header: {
                title: `Raise money for <strong>${charityName}</strong> by recycling for free`,
                paragraphs: [`Send ${site.brandName}® your waste (free&nbsp;shipping) to be recycled;`, `${site.brandName} will donate £10 to <strong>${charityName}</strong>`],
            },
            introduction: {
                charityLogoFileName: "143247 Sunray Community-Mobile.png",
                paragraphs: [
                    `This holiday season, you can donate to <strong>${charityName}</strong> by recycling through ${site.brandName} <em>at no cost to you!</em> By sending your waste to ${site.brandName} (free&nbsp;shipping), you’ll make a positive impact on the environment and support <strong>${charityName}</strong>. Send your used, hard-to-recycle products and packaging to ${site.brandName}, and they’ll donate £10 per shipment received to <strong>${charityName}</strong>.`,
                    `${site.brandName} is opening ${charityPrograms.length} recycling programmes for participation through the end of the year.`,
                    `To allow ample time to process your shipment and ensure we receive the maximum donation, start collecting your waste today and ship <strong>no later than December 15th</strong>.`,
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
                        title: `${site.brandName} donates £10 per recycling shipment`,
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
                closingSentence: `Don’t forget to ship your packages <strong>no later than December 15th</strong> to ensure <strong>${charityName}</strong> receives the maximum donation from ${site.brandName}. Shipments received after December 31st will only be eligible for the standard incentives offered.`,
            },
            about: {
                title: `About <strong>${charityName}</strong>`,
                paragraphs: [
                    `${charityName} can be found in Tolworth, Surrey and is located in the Royal Borough of Kingston.`,
                    `Our residents association <a href="https://www.secra.org.uk/" target="_blank" rel="noopener">SECra.org.uk</a> cares for our streets, our environment and each other.`,
                    `We have 1,200 households, various local businesses, a social club, a primary school &amp; allotments in our community.`,
                    `Everyone who lives, works and plays in our community is part of SECra, Sunray &amp; Egmont Community residents association.`,
                    `SunrayRecycle is part of this and helps raise awareness of recycling and raises funds for community workshops, events and has part funded an emergency Defibrillator in the area.`,
                    `SunrayRecycle also has a community allotment plot aimed at supporting those people who would not normally be able to keep one. ♻️🌞`,
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
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="c83a8f73-9730-40e1-ad77-2abb3adf39f9" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/en-GB/sdk_v2.js","terracycle"); </script>',
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
