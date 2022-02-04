const site = require("../../../_data/site");
const charityName = "Sacred Heart Food Pantry";
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
                    description: `Raise money for your favorite charity by recycling for free. ${site.brandName} is opening several recycling programmes for participation through 2022`,
                },
            },
            header: {
                title: `Raise money for <strong>${charityName}</strong> by recycling for free`,
                paragraphs: [`Send ${site.brandName}® your trash (free&nbsp;shipping) to be recycled;`, `${site.brandName} will donate $1 to <strong>${charityName}</strong>`],
            },
            introduction: {
                charityLogoFileName: "sacred_heart_food_pantry.jpg",
                charityLogoHeight: {
                    mobile: 55,
                    desktop: 105,
                },
                paragraphs: [
                    `You can donate to <strong>${charityName}</strong> by recycling through ${site.brandName} at no cost to you! By sending your trash to ${site.brandName} (free&nbsp;shipping), you’ll make a positive impact on the environment and support <strong>${charityName}</strong>. Send your used, hard-to-recycle products and packaging to ${site.brandName}, and you’ll receive ${site.brandName} points that can be redeemed as a charitable donation.`,
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
                        title: `${site.brandName} donates $1 per pound of material you send back to be recycled`,
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
                closingSentence: `${site.brandName} Tip: A bigger shipment is more efficient and lowers the impact your shipment will have. Consider reusing a box or mailer envelope you have around the house when packing up your shipment to be extra eco-friendly.`,
            },
            about: {
                title: `About <strong>${charityName}</strong>`,
                paragraphs: [
                    `Sacred Heart Church was founded in 1913, the third Catholic Church in LaPorte.  Sacred Heart is a lively and dedicated Catholic community.  Through the years many have gathered here to work, pray, and worship in the name of Our Lord Jesus Christ.  Founded by Polish immigrants, the church is now one of three churches that makes up Holy Family Parish.  To learn more about the founding and history of the parish, explore the link below.`,
                    `<a href="https://www.holyfamilylaporte.org/sacred-heart-church-history.html" target="_blank" rel="noopener">https://www.holyfamilylaporte.org/sacred-heart-church-history.html</a>`,
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
                code: '<div class="terracycle-widget-new" data-type="ocsl" data-resource-id="ab1f5cc2-3cb3-4c3e-b36e-1d07d0029e4f" ></div> <script> (function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){ (f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c) })(window,document,"script","https://www.terracycle.com/en-US/sdk_v2.js","terracycle"); </script>',
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
