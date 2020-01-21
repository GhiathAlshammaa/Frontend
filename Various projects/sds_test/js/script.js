// In 'vendorlist.json' you'll find a list of 5 'purposes' and a couple of vendors.
// A 'purpose' describes what a vendor does on a website (for example, personalizing ads or content based on my interests).
// We include these vendor-IDs: 42, 52, 91, 97, 164, 190 and for legal reasons, we need a list of these vendors, showing the name, link to the privacy policy and the name of all assigned purposes.
//
// The result should look like the list in 'result.html'

const globalVendorURL = 'vendorlist.json';
let globalVendorIds = [42, 52, 91, 97, 164, 190]; 

let globalVendorList = [];
let purposes = [];

$.getJSON(globalVendorURL, function (data) {
    globalVendorList = data.vendors;
    purposes = data.purposes;
    ready();
});

function ready() {
    $('.data-wrapper__loading').remove();

    // TODO We only need the vendors from globalVendorIds here.
    // TODO Bonus: Vendors should be sorted alphabetically
    let filteredGlobalVendorList = globalVendorList;

    addVendors(filteredGlobalVendorList);
}

function addVendors(data) {
    for (let i = 0; i < data.length; i++) {
        const vendor = data[i];

        // TODO HTML-Comment should be replaced with the names of all purposes for a vendor

        $(".data-wrapper").append(
            `<li class="vendors vendor-${vendor.id}">${vendor.name} (<a href="${vendor.policyUrl}" target="_blank">${vendor.policyUrl}</a>)
            <ul class="purposes">
            <!-- TODO Render names of purposes here-->
            </ul>
            </li>`
        );
    }
}
