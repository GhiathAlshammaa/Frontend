<?php
// In 'vendorlist.json' you'll find a list of 5 'purposes' and a couple of vendors.
// A 'purpose' describes what a vendor does on a website (for example, personalizing ads or content based on my interests).
// We include these vendor-IDs: 42, 52, 91, 97, 164, 190 and for legal reasons, we need a list of these vendors, showing the name, link to the privacy policy and the name of all assigned purposes.
//
// The result should look like the list in 'result.html'

$vendor_ids = [42, 52, 91, 97, 164, 190]; 

$json = file_get_contents("vendorlist.json") or die("Can't open file!");

$out = "";
$data = json_decode($json);

$vendor_list = $data->vendors;
$purposes = $data->purposes;

$id_exists = function ($item) use ($vendor_ids) {
    return in_array($item->id, $vendor_ids);
};

// TODO We only need the vendors from globalVendorIds here. HINT: Use the function from $id_exists 
// TODO Bonus: Vendors should be sorted alphabetically
$filtered_vendor_list = $vendor_list;

foreach($filtered_vendor_list as $vendor) {
    // TODO HTML-Comment should be replaced with the names of all purposes for a vendor
    
    $out .= "<li class=\"vendors vendor-{$vendor->id}\">{$vendor->name} (<a href=\"{$vendor->policyUrl}\" target=\"_blank\">{$vendor->policyUrl}</a>)
        <ul class=\"purposes\">
        <!-- TODO Render names of purposes here-->
        </ul>
        </li>";
}
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test</title>
    <style type="text/css">
        .data-wrapper {
            height: 100%;
            word-wrap: break-word;
        }
    
        .data-wrapper .vendors{
            font-weight: bold;
            margin-bottom: 15px;
            list-style-type: none;
        }
    
        .data-wrapper .purposes{
            font-size: 16px;
            font-weight: normal;
        }
    
    </style>
</head>
<body>
    <ul class="data-wrapper">
        <?php echo $out ?>
    </ul>
</body>
</html>