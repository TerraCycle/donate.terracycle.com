const site = require("../../../_data/site");
const charityName = "Medic to Medic";
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
        name: "The Hair Care Packaging Recycling Programme",
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
        name: "The Philips Dental Care Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Electric toothbrush heads and covers, electric flosser nozzles, flossing sticks, interdental brushes, dental floss containers and manual toothbrushes",
        imageFilename: "Philips_AW-Image-Mobile.jpg",
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
    {
        name: "The Carex® Recycling Programme",
        descriptionTitle: "What you can recycle:",
        description: "Carex® hand wash refill pouches and caps, Carex®, Imperial Leather®, Bayley’s of Bond Street® and Original Source® hand wash pumps",
        imageFilename: "Carex_AW-Image-Mobile.jpg",
    },
];

module.exports = () => {
    return {
        data: {
            lang: "en-GB",
            head: {
                title: charityName,
                meta: {
                    description: "This Earth Month, support your favourite charity by recycling your non-recyclable rubbish with recycling experts TerraCycle! It's a great opportunity to do two good deeds for the price of one: support a worthy cause, whilst preventing loads of rubbish from ending up in landfills.",
                },
            },
            header: {
                title: `Raise money for <strong>${charityName}</strong> by recycling for free`,
                paragraphs: [`Send ${site.brandName}® your rubbish (free&nbsp;shipping) to be recycled;`, `${site.brandName} will donate £5 to <strong>${charityName}</strong>`],
            },
            introduction: {
                charityLogoFileName: "medic_to_medic.jpg",
                charityLogoHeight: {
                    mobile: 65,
                    desktop: 110,
                },
                paragraphs: [
                    `To celebrate Earth Month this year, you can donate to <strong>${charityName}</strong> by recycling through ${site.brandName} <em>at no cost to you!</em> By sending your rubbish to ${site.brandName} (free shipping), you’ll make a positive impact on the environment and support <strong>${charityName}</strong>. Send your used, hard-to-recycle products and packaging to TerraCycle, and they’ll donate £5 per shipment received to <strong>${charityName}</strong>. `,
                    `${site.brandName} is opening 12 recycling programmes for participation until the end of April. To allow ample time to process your shipment and ensure we receive the maximum donation, start collecting your rubbish today and ship no later than April 30th.`,
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
                        text: `Each programme recycles one category of rubbish, so make sure to review the list of programmes to find the best fit for you! You can use as many programmes as you wish.`,
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
                        title: `${site.brandName} donates £5 per recycling shipment`,
                        text: `Just like that, you've donated to <strong>${charityName}</strong> at no cost to you.`,
                        iconFilename: "Donate icon.svg",
                    },
                    {
                        title: "Repeat!",
                        text: `If you would like to recycle through multiple programmes, please download a new shipping label for each programme and send the rubbish in separate boxes.`,
                        iconFilename: "Repeat icon.svg",
                    },
                ],
                previousStep: "previous step",
                nextStep: "next step",
                closingSentence: `Don’t forget to ship your packages  <strong>no later than April 30th</strong> to ensure ${charityName} receives the maximum donation from ${site.brandName}. Shipments sent after April 30th will only be eligible for the standard incentives offered.`,
            },
            about: {
                title: `About <strong>${charityName}</strong>`,
                paragraphs: [
                    `${charityName} supports disadvantaged students in developing countries to complete their training as health workers. We focus our work in Malawi, one of the poorest countries in the world where we provide support to cover yearly tuition fees, stationery allowances and one-off items including medical equipment, books and laptop, ensuring each individual has everything they need to successfully qualify to serve the impoverished health services in their country. Our aim is to add to the absolute numbers of health workers in training in countries where there are critical shortages by targeting our support to those most at risk of dropping out of their training. We support trainee doctors, nurses, pharmacists, clinical officers, physiotherapists, optometrists, audiologists and mental health workers.`,
                ],
            },
            exploreWhatYouCanRecycle: {
                title: "Explore What You Can Recycle",
                paragraphs: [
                    `Browse through the programme tiles to view the “unrecyclable” items that ${site.brandName} can accept.`,
                    `If you would like to recycle through multiple programmes, <strong>please download a new shipping label for each programme and please send the rubbish corresponding to each programme in separate boxes</strong>.`,
                    `This helps ${site.brandName} recycle efficiently. You can download as many free shipping labels as you need.`,
                ],
                programs: charityPrograms,
                seeAllButtonLabel: "See All",
                seeLessButtonLabel: "See Less",
            },
            widgetSection: {
                heading: "Get Your Free Shipping Label + Donate at Zero Cost to You",
                // ⚠️ Important: please join lines before pasting the code! E.g. https://convert-tool.com/conversion/join-lines
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="bf916e9e-b3a3-4bdf-bcb0-e9b1a874fd12" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/en-GB/sdk_v2.js","terracycle"); </script>',
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
