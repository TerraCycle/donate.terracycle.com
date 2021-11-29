const site = require("../../../_data/site");
const charityName = "Evergreen Community Charter School";
const charityPrograms = [
    {
        name: "ARM &amp; HAMMER™ and OXICLEAN™ Pouch Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "ARM &amp; HAMMER™ and OXICLEAN™ plastic pouches",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_arm and hamer.jpg",
    },
    {
        name: "MARTINI &amp; ROSSI® Pouch Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "MARTINI &amp; ROSSI® Frosé and Frosecco pouches",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Martini.jpg",
    },
    {
        name: "Gatorade Beyond the Bounds Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Gatorade®, Propel®, EVOLVE® and Muscle Milk® sports nutrition product packaging",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Gatorade.jpg",
    },
    {
        name: "HALLS® Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "all brands of cough and sore throat drop packaging",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Halls.jpg",
    },
    {
        name: "Drink Pouch Recycling Program: Honest Kids",
        descriptionTitle: "What you can recycle:",
        description: "all drink pouches",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Honest Kids.jpg",
    },
    {
        name: "L.O.L. Surprise!™ Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "L.O.L. Surprise!™ packaging, accessories, and products",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_LOL.jpg",
    },
    {
        name: "Living proof® Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Living proof® hair care packaging",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Living Proof.jpg",
    },
    {
        name: "Karma™ Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Karma™ dry pet food bags",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Karma.jpg",
    },
    {
        name: "Mountain House Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Mountain House pouches",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Mountain House.jpg",
    },
    {
        name: "Calphalon® Cooking Tools Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "all brands of metal-based cookware, bakeware, and cutlery",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_calphalon.jpg",
    },
    {
        name: "NOW® Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "NOW® plastic packaging",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Now.jpg",
    },
    {
        name: '<span class="tc-nowrap--md">The Gold Bond®, Cortizone-10®, and</span> Selsun blue® Recycling Program',
        descriptionTitle: "What you can recycle:",
        description: "Gold Bond®, Cortizone-10®, and Selsun blue® product packaging",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Sanofi.jpg",
    },
    {
        name: "Serenity Kids® Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Serenity Kids® baby food pouches",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Serenitykids.jpg",
    },
    {
        name: "Spin Master Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Spin Master toys and games",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Spinmaster.jpg",
    },
    {
        name: "SWEDISH FISH® Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "SWEDISH FISH® packaging",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Swedish Fish.jpg",
    },
    {
        name: "Taco Bell® Sauce Packet Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Taco Bell® sauce packets",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Taco Bell.jpg",
    },
    {
        name: "Tailored Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Tailored pet food packaging",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_tailored.jpg",
    },
    {
        name: "Wellness® Pet Food Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Wellness Complete Health®, Wellness CORE®, and Holistic Select® pet food bags and Wellness CORE® and Wellness® soft wet food pouches",
        imageFilename: "TC Charity Site-Brand Images-Mobile-us-v2_Wellpet.jpg",
    },
];

module.exports = () => {
    return {
        data: {
            lang: "en-Us",
            head: {
                title: charityName,
                meta: {
                    description: `Raise money for your favorite charity by recycling for free. ${site.brandName} is opening several recycling programs for participation through the end of the year.`,
                },
            },
            header: {
                title: `Raise money for <strong>${charityName}</strong> by recycling for free`,
                paragraphs: [`Send ${site.brandName}® your trash (free shipping) to be recycled;`, `${site.brandName} will donate $10 to <strong>${charityName}</strong>`],
            },
            introduction: {
                charityLogoFileName: "TC Charity Microsite - Charity Logo Resize, US_Scarce I Environmental Education.jpg",
                paragraphs: [
                    `This holiday season, you can donate to <strong>${charityName}</strong> by recycling through ${site.brandName} <em>at no cost to you!</em> By sending your trash to ${site.brandName} (free shipping), you’ll make a positive impact on the environment and support <strong>${charityName}</strong>. Send your used, hard-to-recycle products and packaging to ${site.brandName}, and they’ll donate $10 per shipment received to <strong>${charityName}</strong>.`,
                    `${site.brandName} is opening ${charityPrograms.length} recycling programs for participation through the end of the year.`,
                    `To allow ample time to process your shipment and ensure we receive the maximum donation, start collecting your waste today and ship <strong>no later than December 15</strong>.`,
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
                        text: `Each program recycles one category of waste, so make sure to review the list of programs to find the best fit for you!  You can use as many programs as you wish.`,
                        iconFilename: "Select Icon.svg",
                    },
                    {
                        title: "Ship for free",
                        text: `When you’re done collecting, download FREE shipping labels.`,
                        iconFilename: "Download laptop icon.svg",
                    },
                    {
                        title: `Mail your collections to ${site.brandName}`,
                        text: `PRO TIP: Make sure your items are dry when you ship.`,
                        iconFilename: "Box icon.svg",
                    },
                    {
                        title: `${site.brandName} donates $10 per recycling shipment`,
                        text: `Just like that, you've donated to <strong>${charityName}</strong> at no cost to you.`,
                        iconFilename: "Donate icon.svg",
                    },
                    {
                        title: "Repeat!",
                        text: `If you would like to recycle through multiple programs, please download a new shipping label for each program and send the waste in separate boxes.`,
                        iconFilename: "Repeat icon.svg",
                    },
                ],
                previousStep: "previous step",
                nextStep: "next step",
                closingSentence: `Don’t forget to ship your packages <strong>no later than December 15</strong> to ensure <strong>${charityName}</strong> receives the maximum donation from ${site.brandName}. Shipments received after December 31 will only be eligible for the standard incentives offered.`,
            },
            about: {
                title: `About <strong>${charityName}</strong>`,
                paragraphs: [
                    `Working in partnership with parents, elders, and the community, ${charityName} offers an academically challenging, developmentally appropriate, experiential, holistic, child-centered education to all young people. We nurture a passion for learning that lasts a lifetime as we challenge our community to discover their individual gifts, to honor their inner worth, to strive for excellence, to pursue respectful and ethical relationships with themselves and others, and to find their own path of service.`,
                    `Our Mission<br />${charityName} is a learning community committed to the pursuit of excellence in the holistic education of mind, body, and spirit. We prepare students for successful lifelong learning, social responsibility, environmental stewardship, and service. We value the voice of every member of our community.`,
                    `<a href="https://www.evergreenccs.org/" target="_blank" rel="noopener">https://www.evergreenccs.org/</a>`,
                ],
            },
            exploreWhatYouCanRecycle: {
                title: "Explore What You Can Recycle",
                paragraphs: [
                    `Browse through the program tiles to view the “unrecyclable” items that ${site.brandName} can accept.`,
                    `If you would like to recycle through multiple programs, <strong>please download a new shipping label for each program and please send the waste corresponding to each program in separate boxes</strong>.`,
                    `This helps ${site.brandName} recycle efficiently. You can download as many free shipping labels as you need.`,
                ],
                programs: charityPrograms,
                seeAllButtonLabel: "See All",
                seeLessButtonLabel: "See Less",
            },
            widgetSection: {
                heading: "Get Your Free Shipping Label + Donate at Zero Cost to You",
                // ⚠️ Important: please join lines before pasting the code! E.g. https://convert-tool.com/conversion/join-lines
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="4a1fb88a-96b2-4a2f-bb23-f2a779976fe0" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/en-US/sdk_v2.js","terracycle"); </script>',
            },
            footer: {
                link: {
                    privacyPolicy: {
                        text: "Privacy Policy",
                        href: "https://www.terracycle.com/en-US/pages/privacy-policy",
                    },
                    termsOfUse: {
                        text: "Terms of Use",
                        href: "https://www.terracycle.com/en-US/pages/terms-of-use",
                    },
                    doNotSellMyPersonalInformation: {
                        text: "Do Not Sell My Personal Information",
                        href: "https://www.terracycle.com/en-US/pages/ccpa",
                    },
                },
                copyright: `Copyright ${site.brandName}© 2021. All Rights Reserved`,
            },
        },
    };
};
