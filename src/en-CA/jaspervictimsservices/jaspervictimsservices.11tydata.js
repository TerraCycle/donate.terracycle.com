const site = require("../../../_data/site");
const charityName = "Jasper Victims Services";
const charityPrograms = [
    {
        name: "P&G Eco-Box Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Tide, Downy and Gain Eco-Box packaging",
        imageFilename: "TC Charity Site-Brand Images-ca-v2_tideecobox-Mobile.jpg",
    },
    {
        name: "L.O.L. Surprise!™ Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "L.O.L. Surprise!™ packaging, accessories, and products",
        imageFilename: "TC Charity Site-Brand Images-ca-v2_LOL-Mobile.jpg",
    },
    {
        name: "Babybel® Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Babybel packaging",
        imageFilename: "TC Charity Site-Brand Images-ca-v2_Babybel-Mobile.jpg",
    },
    {
        name: "Gerber® Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Gerber® baby food packaging",
        imageFilename: "TC Charity Site-Brand Images-ca-v2_Gerber-Mobile.jpg",
    },
    {
        name: "Vileda® Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Vileda® mop head refills, gloves and scrunge sponges",
        imageFilename: "TC Charity Site-Brand Images-ca-v2_vileda-Mobile.jpg",
    },
    {
        name: "Living proof® Recycling Program",
        descriptionTitle: "What you can recycle:",
        description: "Living proof® hair care packaging",
        imageFilename: "TC Charity Site-Brand Images-ca-v2_Living Proof-Mobile.jpg",
    },
];

module.exports = () => {
    return {
        data: {
            lang: "en-CA",
            head: {
                title: charityName,
                meta: {
                    description: `Raise money for your favorite charity by recycling for free. ${site.brandName} is opening several recycling programmes for participation through 2022`,
                },
            },
            header: {
                title: `Raise money for <strong>${charityName}</strong> by recycling for free.`,
                paragraphs: [`Send ${site.brandName}® your trash (free&nbsp;shipping) to be recycled; ${site.brandName} will donate $1 to ${charityName}`],
            },
            introduction: {
                charityLogoFileName: "jasper_victims_services.jpg",
                charityLogoHeight: {
                    mobile: 50,
                    desktop: 76,
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
                        text: "Each program recycles one category of waste, so make sure to review the list of programs to find the best fit for you!  You can use as many programs as you wish.",
                        iconFilename: "Select Icon.svg",
                    },
                    {
                        title: "Ship for free",
                        text: "When you’re done collecting, download FREE shipping labels.",
                        iconFilename: "Download laptop icon.svg",
                    },
                    {
                        title: `Mail your collections to ${site.brandName}`,
                        text: "PRO TIP: Make sure your items are dry when you ship.",
                        iconFilename: "Box icon.svg",
                    },
                    {
                        title: `${site.brandName} donates $1 per pound of material you send back to be recycled`,
                        text: `Just like that, you've donated to <strong>${charityName}</strong> at no cost to you.`,
                        iconFilename: "Donate icon.svg",
                    },
                    {
                        title: "Repeat!",
                        text: "If you would like to recycle through multiple programs, please download a new shipping label for each program and send the waste in separate boxes.",
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
                    `Jasper Victim Services maintains a high level of Service to Victims of Crime and Trauma in Jasper, these people and their families call upon Jasper Victim Services to provide emotional support, but also accommodation, transportation, and other basic needs. The well trained Jasper Victim Services Advocates provide supports to victims of crime and trauma with compassionate care. Jasper Victim Services provides on-call services to the 5,000 residents of the Municipality of Jasper as well as approximately 2.2 million tourists per year in the 10,878 sq. km National Park. We have been in a world of extreme change since March of 2020, but Victim Services involvement in supporting victims, and through the court process has been consistent. Jasper Victim Services exists to ensure that victimized persons receive support, information, referral and court information subsequent to their victimization, in order to limit the effect of their crisis, and to assist in returning their lives to a desired degree of stability. <a href="https://jasper-alberta.com/2356/Jasper-Victim-Services-Unit" target="_blank" rel="noopener">https://jasper-alberta.com/2356/Jasper-Victim-Services-Unit</a>`,
                ],
            },
            exploreWhatYouCanRecycle: {
                title: "Explore What You Can Recycle",
                paragraphs: [
                    `Browse through the program tiles to view the “unrecyclable” items that ${site.brandName} can accept. If you would like to recycle through multiple programs, <strong>please download a new shipping label for each program and please send the waste corresponding to each program in separate boxes</strong>.`,
                    `This helps ${site.brandName} recycle efficiently. You can download as many free shipping labels as you need.`,
                ],
                programs: charityPrograms,
                seeAllButtonLabel: "See All",
                seeLessButtonLabel: "See Less",
            },
            widgetSection: {
                heading: "Get Your Free Shipping Label + Donate at Zero Cost to You",
                // ⚠️ Important: please join lines before pasting the code! E.g. https://convert-tool.com/conversion/join-lines
                code: '<div class="terracycle-widget" data-type="ocsl" data-locale="en-CA" data-resource-id="68380e01-4551-4dc1-a6f7-1ad748321003" ></div><script>(function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){(f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c)})(window,document,"script","https://www.terracycle.com/en-CA/sdk.js","terracycle");</script>',
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
                },
                copyright: `Copyright ${site.brandName}© 2021. All Rights Reserved`,
            },
        },
    };
};
