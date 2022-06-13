<?php
    $url = 'https://decoin.api-us1.com';


    $params = array(
        'api_key'      => 'afa36d713625aa2b07b302aeabeb2bc569426453886a03c4f8f741538cdb2fb93b74a741',        
        'api_action'   => 'contact_add',
        'api_output'   => 'serialize',
    );
    $post = array(
        'email'                    => $_POST['email'],
        'first_name'               => $_POST['fullName'],
        'last_name'                => $_POST['fullName'],
        'phone'                    => '',
        'customer_acct_name'       => '',
        'tags'                     => 'api',
        'p[123]'                   => 2, 
        'status[1]'              => 1, 
        'instantresponders[123]' => 1
    );

    $query = "";
    foreach( $params as $key => $value ) $query .= urlencode($key) . '=' . urlencode($value) . '&';
    $query = rtrim($query, '& ');

    
    $data = "";
    foreach( $post as $key => $value ) $data .= urlencode($key) . '=' . urlencode($value) . '&';
    $data = rtrim($data, '& ');
    
    $url = rtrim($url, '/ ');

    if ( !function_exists('curl_init') ) die('CURL not supported. (introduced in PHP 4.0.2)');

   
    if ( $params['api_output'] == 'json' && !function_exists('json_decode') ) {
        die('JSON not supported. (introduced in PHP 5.2.0)');
    }
    
    $api = $url . '/admin/api.php?' . $query;

    $request = curl_init($api); 
    curl_setopt($request, CURLOPT_HEADER, 0); 
    curl_setopt($request, CURLOPT_RETURNTRANSFER, 1); 
    curl_setopt($request, CURLOPT_POSTFIELDS, $data); 
   
    curl_setopt($request, CURLOPT_FOLLOWLOCATION, true);

    $response = (string)curl_exec($request); 

    curl_close($request); 

    if ( !$response ) {
        die('Nothing was returned. Do you have a connection to Email Marketing server?');
    }
    $result = unserialize($response);
    
    echo 'Result: ' . ( $result['result_code'] ? 'SUCCESS' : 'FAILED' ) . '<br />';
    echo 'Message: ' . $result['result_message'] . '<br />';

    // The entire result printed out
    echo 'The entire result printed out:<br />';
    echo '<pre>';
    print_r($result);
    echo '</pre>';    
?>