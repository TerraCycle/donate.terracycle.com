const site = require("../../../_data/site");
const charityName = "Brain Garden";
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
                    description: `Raise money for your favorite charity by recycling for free. ${site.brandName} is opening several recycling programmes for participation through the end of the year.`,
                },
            },
            header: {
                title: `Raise money for <strong>${charityName}</strong> by recycling for free.`,
                paragraphs: [`Send ${site.brandName}® your trash (free&nbsp;shipping) to be recycled; ${site.brandName} will donate $10 to ${charityName}`],
            },
            introduction: {
                charityLogoFileName: "TC Charity Microsite - Charity Logo Resize, CA, Mobile_Bucks for Butts.jpg",
                paragraphs: [
                    `This holiday season, you can donate to <strong>${charityName}</strong> by recycling through ${site.brandName} at no cost to you! By sending your trash to ${site.brandName} (free&nbsp;shipping), you’ll make a positive impact on the environment and support <strong>${charityName}</strong>. Send your used, hard-to-recycle products and packaging to TerraCycle, and they’ll donate $10 per shipment received to <strong>${charityName}</strong>.`,
                    `${site.brandName} is opening ${charityPrograms.length} recycling programs for participation through the end of the year.`,
                    "To allow ample time to process your shipment and ensure we receive the maximum donation, start collecting your waste today and ship <strong>no later than December 15th</strong>.",
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
                        title: `${site.brandName} donates $10 per recycling shipment`,
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
                closingSentence: `Don’t forget to ship your packages <strong>no later than December 15</strong> to ensure <strong>${charityName}</strong> receives the maximum donation from ${site.brandName}. Shipments received after December 31 will only be eligible for the standard incentives offered. `,
            },
            about: {
                title: `About <strong>${charityName}</strong>`,
                paragraphs: [
                    "Brain Garden started as a grassroots endeavor & grew into a global movement, becoming a leader in tobacco waste product reduction strategies & disposal, & the premier distributor of custom branded Reusable Pocket Ashtrays in the world.",
                `<a href="https://braingarden.ca/" target="_blank" rel="noopener">https://braingarden.ca/</a>`,
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
                code: '<div class="terracycle-widget" data-type="ocsl" data-locale="en-CA" data-resource-id="51f75bf9-269a-44a8-936d-cba7b4f53fb9" ></div><script>(function(f,a,d,g,e,b,c){f.TerraCycleObject=e;f[e]=f[e]||function(){(f[e].q=f[e].q||[]).push(arguments)};f[e].t=1*new Date();b=a.createElement(d); c=a.getElementsByTagName(d)[0];b.async=1;b.src=g;c.parentNode.insertBefore(b,c)})(window,document,"script","https://www.terracycle.com/en-CA/sdk.js","terracycle");</script>',
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
