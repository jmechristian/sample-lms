/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

var aws = require('aws-sdk');
var ses = new aws.SES({ region: 'us-east-1' });

exports.handler = async (event) => {
  const { email } = event.queryStringParameters;

  var myVar =
    '<!-- THIS EMAIL WAS BUILT AND TESTED WITH LITMUS http://litmus.com -->' +
    '<!-- IT WAS RELEASED UNDER THE MIT LICENSE https://opensource.org/licenses/MIT -->' +
    '<!-- QUESTIONS? TWEET US @LITMUSAPP -->' +
    '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    '<title></title>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
    '<style type="text/css">' +
    '/* CLIENT-SPECIFIC STYLES */' +
    'body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }' +
    'table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }' +
    'img { -ms-interpolation-mode: bicubic; }' +
    '' +
    '/* RESET STYLES */' +
    'img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }' +
    'table { border-collapse: collapse !important; }' +
    'body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }' +
    '' +
    '/* iOS BLUE LINKS */' +
    'a[x-apple-data-detectors] {' +
    '    color: inherit !important;' +
    '    text-decoration: none !important;' +
    '    font-size: inherit !important;' +
    '    font-family: inherit !important;' +
    '    font-weight: inherit !important;' +
    '    line-height: inherit !important;' +
    '}' +
    '' +
    '/* MEDIA QUERIES */' +
    '@media screen and (max-width: 480px) {' +
    '    .mobile-hide {' +
    '        display: none !important;' +
    '    }' +
    '    .mobile-center {' +
    '        text-align: center !important;' +
    '    }' +
    '}' +
    '' +
    '/* ANDROID CENTER FIX */' +
    'div[style*="margin: 16px 0;"] { margin: 0 !important; }' +
    '</style>' +
    '' +
    '' +
    '</head>' +
    '<body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">' +
    '' +
    '<!-- HIDDEN PREHEADER TEXT -->' +
    '<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">' +
    'You are successfully registered for the 2023 Automotive Pakcaging Summit.' +
    '</div>' +
    '' +
    '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
    '    <tr>' +
    '        <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">' +
    '        <!--[if (gte mso 9)|(IE)]>' +
    '        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '        <tr>' +
    '        <td align="center" valign="top" width="600">' +
    '        <![endif]-->' +
    '        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">' +
    '            <tr>' +
    '                <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#005892">' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                <tr>' +
    '                <td align="left" valign="top" width="300">' +
    '                <![endif]-->' +
    '                <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">' +
    '                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">' +
    '                        <tr>' +
    '                            <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;" class="mobile-center">' +
    '                                <img src="https://apsmedia.s3.amazonaws.com/images/aps_logo_email.png" alt=\'ps logo\' width="200" height="53"/>' +
    '                            </td>' +
    '                        </tr>' +
    '                    </table>' +
    '                </div>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                <td align="right" width="300">' +
    '                <![endif]-->' +
    '                <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;" class="mobile-hide">' +
    '                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">' +
    '                        <tr>' +
    '                            <td align="right" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">' +
    '                                <table cellspacing="0" cellpadding="0" border="0" align="right">' +
    '                                    <tr>' +
    '                                        <td style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">' +
    '                                            <p style="font-size: 16px; font-weight: 400; margin: 0; color: #ffffff;"><a href="https://autopacksummit.com/" target="_blank" style="color: #ffffff; text-decoration: none;">AutopackSummit.com</a></p>' +
    '                                        </td>' +
    '                                        ' +
    '                                    </tr>' +
    '                                </table>' +
    '                            </td>' +
    '                        </tr>' +
    '                    </table>' +
    '                </div>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                </tr>' +
    '                </table>' +
    '                <![endif]-->' +
    '                </td>' +
    '            </tr>' +
    '            <tr>' +
    '                <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                <tr>' +
    '                <td align="center" valign="top" width="600">' +
    '                <![endif]-->' +
    '                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">' +
    '                    <tr>' +
    '                        <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-bottom: 15px; border-bottom: 3px solid #eeeeee;">                     ' +
    '                            <img src="https://apsmedia.s3.amazonaws.com/images/checkmark.png" width="170" height="170" style="display: block; border: 0px;"/>' +
    '                            <br>' +
    '                            <h2 style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">' +
    "                                We'll See You in Greenville!" +
    '                            </h2>' +
    '                            <p style="font-size: 18px; font-weight: 400; line-height: 28px; color: #777777;">' +
    '                                You\'ve successfully registered for the <a href="https://autopacksummit.com">2023 Automotive Packaging Summit</a>, October 11-12th in Greenville, South Carolina.' +
    '                            </p>' +
    '                            ' +
    '                        </td>' +
    '                    </tr>' +
    '                    <tr>' +
    '                        <td align="center" style="padding: 25px 0;">' +
    '                            <table border="0" cellspacing="0" cellpadding="0">' +
    '                                <tr>' +
    '                                    <td align="center" style="border-radius: 5px;" bgcolor="#005892">' +
    '                                      <a href="https://autopacksummit.com/" target="_blank" style="font-size: 18px; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 5px; background-color: #005892; padding: 15px 30px; border: 1px solid #005892; display: block;">Explore Event</a>' +
    '                                    </td>' +
    '                                </tr>' +
    '                            </table>' +
    '                        </td>' +
    '                    </tr>' +
    '                </table>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                </tr>' +
    '                </table>' +
    '                <![endif]-->' +
    '                </td>' +
    '            </tr>' +
    '            <tr>' +
    '                <td align="center" style="padding: 35px; background-color: #f7f7f7; border-top: 1px solid #dddddd; border-bottom: 1px solid #dddddd;" bgcolor="#f7f7f7" height="100%" valign="top" width="100%">' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                <tr>' +
    '                <td align="center" valign="top" width="600">' +
    '                <![endif]-->' +
    '                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">' +
    '                    <tr>' +
    '                        <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 400; line-height: 24px; padding-bottom: 25px;">' +
    '                            <h3 style="font-size: 20px; font-weight: 800; line-height: 24px; color: #333333; margin: 0;">' +
    '                                Things To Get You Prepared' +
    '                            </h3>' +
    '                        </td>' +
    '                    </tr>' +
    '                    <tr>' +
    '                        <td align="center" valign="top" style="font-size:0;">' +
    '                            <!--[if (gte mso 9)|(IE)]>' +
    '                            <table align="center" border="0" cellspacing="0" cellpadding="0" width="660">' +
    '                            <tr>' +
    '                            <td align="center" valign="top" width="300">' +
    '                            <![endif]-->' +
    '                            <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">' +
    '                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">' +
    '                                    <tr>' +
    '                                        <td align="center" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-bottom: 15px;">' +
    '' +
    '                                            <img src="https://apsmedia.s3.amazonaws.com/images/email_1.png" width="219" height="125" style="display: block; border: 0px;"/>' +
    '                                            <p style="font-size: 15px; font-weight: 800; line-height: 18px; color: #333333;">Travel</p>' +
    '                                            <p style="font-size: 15px; font-weight: 400; line-height: 18px; color: #777777; margin: 0;">Find hotel blocks, travel information, and more about Greenville</p>' +
    '                                            <p style="font-size: 15px; font-weight: 800; line-height: 18px; color: #ed8e20;"><a href="https://autopacksummit.com/travel" target="_blank" style="text-decoration: none; color: #005892;">GO NOW</a></p>' +
    '' +
    '                                        </td>' +
    '                                    </tr>' +
    '                                </table>' +
    '                            </div>' +
    '                            <!--[if (gte mso 9)|(IE)]>' +
    '                            </td>' +
    '                            <td align="center" valign="top" width="300">' +
    '                            <![endif]-->' +
    '                            <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">' +
    '                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">' +
    '                                    <tr>' +
    '                                        <td align="center" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-bottom: 15px;">' +
    '' +
    '                                            <img src="https://apsmedia.s3.amazonaws.com/images/email_2.png" width="219" height="125" style="display: block; border: 0px;"/>' +
    '                                            <p style="font-size: 15px; font-weight: 800; line-height: 18px; color: #333333;">Agenda</p>' +
    '                                            <p style="font-size: 15px; font-weight: 400; line-height: 18px; color: #777777; margin: 0;">Check back frequently as the event adds more exciting content.</p>' +
    '                                            <p style="font-size: 15px; font-weight: 800; line-height: 18px; color: #ed8e20;"><a href="https://autopacksummit.com/agenda" target="_blank" style="text-decoration: none; color: #005892;">GO NOW</a></p>' +
    '' +
    '                                        </td>' +
    '                                    </tr>' +
    '                                </table>' +
    '                            </div>' +
    '                            <!--[if (gte mso 9)|(IE)]>' +
    '                            </td>' +
    '                            </tr>' +
    '                            </table>' +
    '                            <![endif]-->' +
    '                        </td>' +
    '                    </tr>' +
    '                </table>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                </tr>' +
    '                </table>' +
    '                <![endif]-->' +
    '                </td>' +
    '            </tr>' +
    '            <tr>' +
    '                <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                <tr>' +
    '                <td align="center" valign="top" width="600">' +
    '                <![endif]-->' +
    '                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">' +
    '                    <tr>' +
    '                        <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-bottom: 15px; padding-top: 15px;">' +
    '                            <h3 style="font-size: 20px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">' +
    '                                Thank You To Our Registration Sponsor' +
    '                            </h3>' +
    '                            <div> </div>' +
    '                            <a href=\'https://www.surgere.com/surgere-certainity?utm_source=packagingschool&utm_medium=web&utm_campaign=autopack2023&utm_content=welcomeemail\'><img src="https://apsmedia.s3.amazonaws.com/images/SURGERE_CMYK.png" width="400" height="53" style="display: block; border: 0px;"/></a><br>' +
    '                            ' +
    '                            <p style="font-size: 15px; font-weight: 400; line-height: 22px; color: #777777;">' +
    '                                <a href="https://www.surgere.com/surgere-certainity?utm_source=packagingschool&utm_medium=web&utm_campaign=autopack2023&utm_content=welcomeemail">Surgere</a> is an IoT supply chain solutions provider that brings source-of-truth data to your daily operations. Leveraging our Interius software, Surgere customers experience insight and certainty across asset management, packaging specification management and localization needs.' +
    '                            </p>' +
    '                            <p style="font-size: 15px; font-weight: 400; line-height: 22px; color: #777777;">' +
    '                                <a href="https://www.surgere.com/surgere-certainity?utm_source=packagingschool&utm_medium=web&utm_campaign=autopack2023&utm_content=welcomeemail">Surgere</a> works with customers to align IoT sensors, hardware and environmental factors in solving warehouse, yard and inventory challenges. Learn more about how Surgere can deliver certainty to your organization â€“ we look forward to meeting you at the show!' +
    '                            </p>' +
    '                        </td>' +
    '                    </tr>' +
    '                    <tr>' +
    '                        ' +
    '                    </tr>' +
    '                </table>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                </tr>' +
    '                </table>' +
    '                <![endif]-->' +
    '                </td>' +
    '            </tr>' +
    '            <tr>' +
    '                ' +
    '            </tr>' +
    '            <tr>' +
    '                <td align="center" style="padding: 35px; background-color: #ffffff; border-top: 1px solid #dddddd;" bgcolor="#ffffff">' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                <tr>' +
    '                <td align="center" valign="top" width="600">' +
    '                <![endif]-->' +
    '                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">' +
    '                    <tr>' +
    '                        <td align="center">' +
    '                            <img src="https://apsmedia.s3.amazonaws.com/images/AutoPackSummit-RGB-digital_color_stacked.png" width="50" height="50" style="display: block; border: 0px;"/>' +
    '                        </td>' +
    '                    </tr>' +
    '                    <tr>' +
    '                        <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; padding: 5px 0 10px 0;">' +
    '                            <p style="font-size: 14px; font-weight: 800; line-height: 18px; color: #333333;">' +
    '                                October 11-12, 2023<br>' +
    '                                Greenville, South Carolina' +
    '                            </p>' +
    '                        </td>' +
    '                    </tr>' +
    '                </table>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                </tr>' +
    '                </table>' +
    '                <![endif]-->' +
    '                </td>' +
    '            </tr>' +
    '        </table>' +
    '        <!--[if (gte mso 9)|(IE)]>' +
    '        </td>' +
    '        </tr>' +
    '        </table>' +
    '        <![endif]-->' +
    '        </td>' +
    '    </tr>' +
    '</table>' +
    '</body>' +
    '</html>';

  var params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: {
          Data: 'You are registered for the Automotive Packaging Summit. October 11-12, 2023, Greenville, South Carolina',
        },
        Html: { Data: myVar },
      },

      Subject: { Data: `2023 Automotive Packaging Registration` },
    },
    Source: 'jamie@packagingschool.com',
  };

  try {
    const send = await ses.sendEmail(params).promise();
    console.log(send);
  } catch (err) {
    console.log(err);
  }

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(event),
  };
};
