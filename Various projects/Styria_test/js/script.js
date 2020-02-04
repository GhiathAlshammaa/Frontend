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
    /* The explaining : I've used a filter Method and instead the condition, 
       which should normally exists with filter, I've puted a find Method to
       returning only the items, which has same id in globalVendorIds Array */
    const newVendorList = globalVendorList.filter((vendor) => {
        return globalVendorIds.find((vendorId) => vendorId === vendor.id );
    }); 

    // TODO Bonus: Vendors should be sorted alphabetically
    /* The localeCompare() method returns a number indicating whether a reference string 
       comes before or after or is the same as the given string in sort order. */
    newVendorList.sort((a,b) => a.name.localeCompare(b.name))

    const filteredGlobalVendorList = newVendorList;

    addVendors(filteredGlobalVendorList);
}

function addVendors(data) {
    for (let i = 0; i < data.length; i++) {
        const vendor = data[i];

        // List contains the related purpose Ids
        const purposeIdsList = data[i].purposeIds;
        
        // List contains the related purposes
        let vendorPurposes = [];

        // An operation to filtering the purposes List
        purposes.filter((purpose) => {
            // Filling the new List in purpose's name
            purposeIdsList.forEach(element => { purpose.id === element ? vendorPurposes.push(purpose.name) : null });
        });

        // TODO HTML-Comment should be replaced with the names of all purposes for a vendor
        $(".data-wrapper").append(
            `<li class="vendors vendor-${vendor.id}">${vendor.name} (<a href="${vendor.policyUrl}" target="_blank">${vendor.policyUrl}</a>)
            <ul class="purposes">
            <!-- TODO Render names of purposes here -->
                ${ vendorPurposes.map((item) => `<li class='p-1'>${item}</li>`).join(' ') }
            </ul>
            </li>`
        );
    }
}
