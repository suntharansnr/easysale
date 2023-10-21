import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {
  favoriteListReducer,
  getDataByCategory,
  productCategoryListReducer,
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productImageListReducer,
  productListReducer,
  productReviewCreateReducer,
  productUpdateReducer,
  saveFavoriteReducer,
} from './reducers/productReducers';

import {
  orderCreateReducer,
  orderDeleteReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderMineListReducer,
  orderPayReducer,
  orderSummaryReducer,
} from './reducers/orderReducers';

import { userDetailsReducer, userSigninReducer,userRegisterReducer, userUpdateProfileReducer, userUpdateReducer,} from './reducers/userReducers';
import { themeReducer,} from './reducers/themeReducers';
import { paymentCategoryListReducer, paymentCreateReducer, paymentDeleteReducer, paymentDetailsReducer, paymentListReducer, paymentReviewCreateReducer, paymentUpdateReducer } from './reducers/paymentReducers';
import { districtListReducer, getCityByDistrict } from './reducers/locationReducers';
import { storeCreateReducer, storeDeleteReducer, storeDetailsReducer, storeListReducer, storeUpdateReducer } from './reducers/storeReducers';

import clickSlice from './Redux/slices/clickSlice';
import { packageCreateReducer, packageDeleteReducer, packageDetailsReducer, packageListReducer, packageUpdateReducer } from './reducers/packageReducers';
import { dashboardListReducer } from './reducers/dashboardReducers';
import { reportDeleteReducer, reportDetailsReducer, reportListReducer } from './reducers/reportReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : '',
  },
  themeDetails: {
    themeInfo: localStorage.getItem('themeInfo')
      ? JSON.parse(localStorage.getItem('themeInfo'))
      : {"enable_paypal":"0","enable_stripe":"0","stripe_test_mode":"0","stripe_test_secret_key":"sk_test_tJeAdA1KbhiYV8I8bfPmJcOL","stripe_test_publishable_key":"pk_test_P3TFmKrvT7l29Zpyy1f4pwk8","stripe_live_secret_key":"","stripe_live_publishable_key":"","date_format":"d/m/Y","default_timezone":"Asia/Colombo","date_format_custom":"d/m/Y","site_title":"Maaaz","email_address":"suntharansnr@gmail.com","time_format":"g:i A","time_format_custom":"g:i A","number_of_premium_ads_in_home":"2","number_of_free_ads_in_home":"4","ads_per_page":"12","regular_ads_price":"3","premium_ads_price":"8","ads_price_plan":"regular_ads_free_premium_paid","ads_moderation":"need_moderation","paypal_receiver_email":"shohelmail71-facilitator@gmail.com","enable_paypal_sandbox":"0","site_name":"Maaz Classified","default_storage":"public","amazon_key":"","amazon_secret":"","amazon_region":"","bucket":"","enable_facebook_login":"1","enable_google_login":"1","fb_app_id":"822220258211011","fb_app_secret":"0347f4c1663ced4ee3a40eee20de2b97","google_client_id":"","google_client_secret":"","enable_social_login":"1","enable_social_sharing_in_ad_box":"1","order_by_premium_ads_in_listing":"random","number_of_premium_ads_in_listing":"2","number_of_last_days_premium_ads":"30","enable_slider":"1","premium_ads_max_impressions":"50","footer_left_text":"Copyright [copyright_sign] [year] your company","footer_right_text":"Your additional text, can be use link too","additional_css":"","additional_js":"","facebook_url":"#","twitter_url":"#","linked_in_url":"#","dribble_url":"#","google_plus_url":"#","youtube_url":"#","footer_company_name":"[site_name]","footer_address":"2/21 Barden Loop  <br /> Cupertino, CA 774636","site_phone_number":"(123) 456-7890","site_email_address":"info@customer.com ","footer_about_us":"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.","footer_about_us_read_more_text":"<a href=\"#\">View details »</a>","google_map_embedded_code":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667…dd5904c2!2sDhaka+1000-1200!5e0!3m2!1sen!2sbd!4v1472245590888\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>","monetize_code_below_slider":"<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n                        <!-- TestCSP -->\r\n                        <ins class=\"adsbygoogle\"\r\n                             style=\"display:block\"\r\n                             data-ad-client=\"ca-pub-8618780985613063\"\r\n                             data-ad-slot=\"5484345690\"\r\n                             data-ad-format=\"auto\"></ins>\r\n                        <script>\r\n                            (adsbygoogle = window.adsbygoogle || []).push({});\r\n                        </script>","enable_monetize":"0","monetize_code_below_search_bar":"","monetize_code_below_categories":"<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n                        <!-- TestCSP -->\r\n                        <ins class=\"adsbygoogle\"\r\n                             style=\"display:block\"\r\n                             data-ad-client=\"ca-pub-8618780985613063\"\r\n                             data-ad-slot=\"5484345690\"\r\n                             data-ad-format=\"auto\"></ins>\r\n                        <script>\r\n                            (adsbygoogle = window.adsbygoogle || []).push({});\r\n                        </script>","monetize_code_below_premium_ads":"","monetize_code_below_regular_ads":"","monetize_code_listing_sidebar_top":"","monetize_code_listing_sidebar_bottom":"<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n                        <!-- TestCSP -->\r\n                        <ins class=\"adsbygoogle\"\r\n                             style=\"display:block\"\r\n                             data-ad-client=\"ca-pub-8618780985613063\"\r\n                             data-ad-slot=\"5484345690\"\r\n                             data-ad-format=\"auto\"></ins>\r\n                        <script>\r\n                            (adsbygoogle = window.adsbygoogle || []).push({});\r\n                        </script>","monetize_code_listing_above_premium_ads":"","monetize_code_listing_above_regular_ads":"","monetize_code_below_ad_title":"<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n                        <!-- TestCSP -->\r\n                        <ins class=\"adsbygoogle\"\r\n                             style=\"display:block\"\r\n                             data-ad-client=\"ca-pub-8618780985613063\"\r\n                             data-ad-slot=\"5484345690\"\r\n                             data-ad-format=\"auto\"></ins>\r\n                        <script>\r\n                            (adsbygoogle = window.adsbygoogle || []).push({});\r\n                        </script>","monetize_code_below_ad_image":"","monetize_code_below_ad_description":"","monetize_code_above_general_info":"<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n                        <!-- TestCSP -->\r\n                        <ins class=\"adsbygoogle\"\r\n                             style=\"display:block\"\r\n                             data-ad-client=\"ca-pub-8618780985613063\"\r\n                             data-ad-slot=\"5484345690\"\r\n                             data-ad-format=\"auto\"></ins>\r\n                        <script>\r\n                            (adsbygoogle = window.adsbygoogle || []).push({});\r\n                        </script>","monetize_code_below_general_info":"","monetize_code_above_seller_info":"","monetize_code_below_seller_info":"","monetize_code_listing_below_regular_ads":"<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n                        <!-- TestCSP -->\r\n                        <ins class=\"adsbygoogle\"\r\n                             style=\"display:block\"\r\n                             data-ad-client=\"ca-pub-8618780985613063\"\r\n                             data-ad-slot=\"5484345690\"\r\n                             data-ad-format=\"auto\"></ins>\r\n                        <script>\r\n                            (adsbygoogle = window.adsbygoogle || []).push({});\r\n                        </script>","disqus_shortname":"tclassifieds","enable_disqus_comment_in_blog":"1","show_blog_in_footer":"0","show_blog_in_header":"1","blog_post_amount_in_homepage":"6","show_latest_blog_in_homepage":"1","currency_sign":"LKR","logo":"1474653628axpoj-other-settings-themeqx-classified-2016-09-23-23-57-31.png","logo_storage":"public","logo_settings":"show_image","enable_language_switcher":"1","enable_related_ads":"1","default_theme":"modern","meta_description":"meta_description","modern_category_display_style":"show_top_category_with_sub","modern_home_left_title":"Lorem Ipsum is simply","modern_home_left_content":"Lorem Ipsum is simply dummy text of the printing and\r\nLorem Ipsum is simply dummy text of the printing and\r\nLorem Ipsum is simply dummy text of the printing and\r\nLorem Ipsum is simply dummy text of the printing and typesetting industry.","modern_home_right_title":"Lorem Ipsum is simply dummy text of the printing and typesetting","modern_home_right_content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ","urgent_ads_price":"1500","number_of_urgent_ads_in_home":"2","default_style":"default","countries_usage":"all_countries","usage_single_country_id":"1","modern_home_headline1":"World’s Largest Classified items store","modern_home_headline2":"Search From Over 19,00,000 Classifieds & Post Unlimited Classifieds Free!","enable_payhere":"1","payhere_merchantid":"1216676","payhere_returnurl":"http://localhost/laravelprojects/maaaz.lk/payherereturn","payhere_cancelurl":"http://localhost/laravelprojects/maaaz.lk/payherecancel","payhere_notifyurl":"http://localhost/laravelprojects/maaaz.lk/payherenotify","top_categories":"a:2:{i:0;s:2:\"11\";i:1;s:1:\"7\";}","featured_categories":"a:4:{i:0;s:1:\"7\";i:1;s:2:\"18\";i:2;s:2:\"10\";i:3;s:1:\"1\";}","verification_email_after_registration":"0"},
  },
};



const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  themeDetails:themeReducer,

  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  productCategoryList: productCategoryListReducer,
  productReviewCreate: productReviewCreateReducer,
  getDataByCategory: getDataByCategory,
  productImageList: productImageListReducer,

  reportList: reportListReducer,
  reportDetails: reportDetailsReducer,
  reportDelete: reportDeleteReducer,

  storeList: storeListReducer,
  storeDetails: storeDetailsReducer,
  storeCreate: storeCreateReducer,
  storeUpdate: storeUpdateReducer,
  storeDelete: storeDeleteReducer,
  
  paymentList: paymentListReducer,
  paymentDetails: paymentDetailsReducer,
  paymentCreate: paymentCreateReducer,
  paymentUpdate: paymentUpdateReducer,
  paymentDelete: paymentDeleteReducer,
  paymentCategoryList: paymentCategoryListReducer,
  paymentReviewCreate: paymentReviewCreateReducer,

  favoriteList: favoriteListReducer,
  saveFavorite: saveFavoriteReducer,

  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,

  districtList: districtListReducer,
  getCityByDistrict: getCityByDistrict,

  dashboardList: dashboardListReducer,

  clicks: clickSlice,

  packageList: packageListReducer,
  packageDetails: packageDetailsReducer,
  packageCreate: packageCreateReducer,
  packageUpdate: packageUpdateReducer,
  packageDelete: packageDeleteReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
