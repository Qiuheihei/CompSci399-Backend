/* eslint-disable indent */
exports.getEmailTemplate = (resetURL) => {
    const string = `
    <body style="background-color: #e1e1e1; margin: 0 !important; padding: 0 !important;">
    <!-- HIDDEN PREHEADER TEXT -->
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We're thrilled to have you here! Get ready to dive into your new account. </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
            <td bgcolor="#1746e0" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#1746e0" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 10px 20px 0px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                             <img src="https://i.ibb.co/brrLzd9/i-OS-App-icon.png" width="180" height="180" style="display: block; border: 0px;" />
                        </td>
                        
                    </tr>
                    
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#e1e1e1" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 10px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                            <h1 style="font-size: 30px; font-weight: 400;">Please fill the form</h1> 
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">Tap the button below to open the information form. If you changed your mind and did't want to add a new job vacancy, you can safely delete this email.</p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" align="left" >
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px; ">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center" style="border-radius: 3px;" bgcolor="#1746e0"><a href="${resetURL}" target="_blank" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #1746e0; display: inline-block;">Click Here</a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr> <!-- COPY -->
                    <tr>
                        <td style="padding: 20px 80px 40px 80px;" class="p30-15">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="h3" style="padding-bottom: 30px; color:#444444; font-family:'Lato', Helvetica, Arial, sans-serif;; font-size:25px; line-height:37px; text-align:left; font: weight 300;;">If that doesn't work, copy and paste the following link in your browser:</td>
                                </tr>
                                <tr>
                                    <td class="text" style="padding-bottom: 26px; color:#666666; font-family:'Lato', Helvetica, Arial, sans-serif;; font-size:16px; line-height:30px; text-align:left; min-width:auto !important;"><a href="${resetURL}" clicktracking="off">${resetURL}</a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
     
                        
                        <tr>
                            <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                <p style="margin: 0;">Cheers,<br>Team ATech+</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#e1e1e1" align="center" style="padding: 30px 10px 0px 10px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                                    <tr>
                                        <td bgcolor="#FFECD1" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                            <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>
                                            <p style="margin: 0;"><a href="info-page-git-master-ygua699.vercel.app" style="color: #1746e0;">We&rsquo;re here to help you out</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                            
                        
                </table>
            </td>
        </tr>
        
    </table>
</body>
  `;
    return string;
};

exports.getApprovedEmailTemplate = (job, link) => {
    const {
        companyName, positionName, jobStartTime,
        jobHours, jobContract, jobSalary, jobLocation,
        jobClosingDate, companyDescription, jobDescription,
        jobSkill, questionContactDetail, applicationContactDetail,
    } = job;
    const string = `
    <body style="background-color: #e1e1e1; margin: 0 !important; padding: 0 !important;">
    <!-- HIDDEN PREHEADER TEXT -->
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We're thrilled to have you here! Get ready to dive into your new account. </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
            <td bgcolor="#00467F" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#00467F" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 10px 20px 0px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                             <img src="https://i.ibb.co/brrLzd9/i-OS-App-icon.png" width="180" height="180" style="display: block; border: 0px;" />
                        </td>
                        
                    </tr>
                    
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#e1e1e1" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 10px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                            <h1 style="font-size: 30px; font-weight: 400;">Job information form approved!</h1> 
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">Job information form has been approved by our admin. Recruitment page will be on our website now. You can view your application informaiton below.</p>
                        </td>
                    </tr>
                     <!-- COPY -->
                        <td style="padding: 0px 30px 80px 30px; " class="p30-15">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <style>
                                    .message-style {padding-bottom: 10px; background-color: #ffffff; color:#000000; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size:15px; line-height:37px; text-align:left; font: weight 300; padding: 15px 25px;}
                                    .header-style {padding-bottom: 10px; background-color: #ffffff;color:#000000; font-family: 'Lato', Helvetica, Arial, sans-serif; font-weight: Bold; font-size:30px; line-height:37px; text-align:left; font: weight 300; padding: 15px 25px;}
                                </style>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:34px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" ><b>Application information</b></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>Job overview</b></td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Company: </b>${companyName}</td>
                                    
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Position:</b> ${positionName}</td>
                                    
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Location:</b> ${jobLocation}</td>
                                    
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Start date:</b> ${jobStartTime}</td>
                                    
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Closing date:</b> ${jobClosingDate}</td>
                                    
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Hours:</b> ${jobHours}</td>
                                    
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Contract:</b> ${jobContract}</td>
                                    
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Salary(NZD):</b> $${jobSalary}</td>
                                    
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>About the company</b></td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;">${companyDescription}</td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>About the role:</b></td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"> ${jobDescription}</td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>Key skills:</b></td>
                                    
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;">${jobSkill}</td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>Contact Details:</b> </td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"> ${questionContactDetail}</td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>Application:</b> </td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;">${applicationContactDetail}</td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td style="color:#ff0000; font-size:20px; background-color: #ffffff; padding: 15px 25px;">If you want to remove this job application before the official closing date please press the button below</td>
                                </tr>
                                <tr>
                                    <td align="center" style="background-color: #ffffff;">
                                        <table border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff;">
                                            <tr>
                                                <td class="text-button text-button2" style="border:2px solid #b31212; border-radius:5px; font-family:'Montserrat', Arial, sans-serif; font-size:14px; line-height:18px; text-align:center; font-weight:500; padding:12px 16px; color:#ffffff; background:#b31212;"><a href="${link}" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">Remove application</span></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        
                            
     
                        
                        <tr>
                            <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                <p style="margin: 0;">Cheers,<br>Team ATech+</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#e1e1e1" align="center" style="padding: 30px 10px 0px 10px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                                    <tr>
                                        <td bgcolor="#FFECD1" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                            <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>
                                            <p style="margin: 0;"><a href="https://team15-info-page.vercel.app/" style="color: #1746e0;">We&rsquo;re here to help you out</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                            
                        
                </table>
            </td>
        </tr>
        
    </table>
</body>
    `;
    return string;
};

exports.getDeclinedEmailTemplate = (job,
    companyNameComment,
    positionNameComment,
    jobLocationComment,
    jobStartTimeComment,
    jobClosingDateComment,
    jobHoursComment,
    jobContractComment,
    jobSalaryComment,
    companyDescriptionComment,
    jobDescriptionComment,
    jobSkillComment,
    questionContactDetailComment,
    applicationContactDetailComment,
    overallDeclineReason) => {
    const {
        companyName, positionName, jobStartTime,
        jobHours, jobContract, jobSalary, jobLocation,
        jobClosingDate, companyDescription, jobDescription,
        jobSkill, questionContactDetail, applicationContactDetail,
    } = job;
    let string = `
    <body style="background-color: #e1e1e1; margin: 0 !important; padding: 0 !important;">
    <!-- HIDDEN PREHEADER TEXT -->
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We're thrilled to have you here! Get ready to dive into your new account. </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
            <td bgcolor="#00467F" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#00467F" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 10px 20px 0px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                             <img src="https://i.ibb.co/brrLzd9/i-OS-App-icon.png" width="180" height="180" style="display: block; border: 0px;" />
                        </td>
                        
                    </tr>
                    
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#e1e1e1" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 10px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                            <h1 style="font-size: 30px; font-weight: 400;">Job information form declined</h1> 
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">Sorry the job information form has been declined by our admin. Please read the following message for more details. If you wish to reapply please contact our admin.</p>
                        </td>
                    </tr>
                    <!-- COPY -->
                        <td style="padding: 0px 30px 80px 30px; " class="p30-15">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <style>
                                    .message-style {padding-bottom: 10px; background-color: #ffffff; color:#000000; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size:15px; line-height:37px; text-align:left; font: weight 300; padding: 15px 25px;}
                                    .decline-message-style {padding-bottom: 10px; color:#ff0000; background-color: #ffffff; font-family:'Lato', Helvetica, Arial, sans-serif; font-size:15px; line-height:37px; text-align:left; font: weight 300; padding: 15px 25px; }
                                    .header-style {padding-bottom: 10px; background-color: #ffffff;color:#000000; font-family: 'Lato', Helvetica, Arial, sans-serif; font-weight: Bold; font-size:30px; line-height:37px; text-align:left; font: weight 300; padding: 15px 25px;}
                                </style>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>Application information</b></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" ><b>Job overview</b></td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                    
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"> <b>Compit any: </b>${companyName}</td>
                                </tr>`;
    if (companyNameComment.length != 0) {
        string += `
                                  <tr>
                                      <td class="h3" style= "padding-bottom: 10px;  
                                      color:#ff0000; 
                                      background-color: #ffffff; 
                                      font-family:'Lato', Helvetica, Arial, sans-serif; 
                                      font-size:22px; line-height:37px; 
                                      text-align:left; 
                                      font: weight 300; 
                                      padding: 5px 25px;" id="companyNameComment">${companyNameComment}</td>
                                      
                                  </tr>
                                  `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>Position:</b> ${positionName}</td>
                                    
                                </tr>`;
    if (positionNameComment.length != 0) {
        string += `
                                  <tr>
                                      <td class="h3" style= "padding-bottom: 10px;  
                                      color:#ff0000; 
                                      background-color: #ffffff; 
                                      font-family:'Lato', Helvetica, Arial, sans-serif; 
                                      font-size:22px; line-height:37px; 
                                      text-align:left; 
                                      font: weight 300; 
                                      padding: 5px 25px;" id="positionNameComment">${positionNameComment}</td>
                                      
                                  </tr>
                                  `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Location:</b> ${jobLocation}</td>
                                    
                                </tr>
                                `;
    if (jobLocationComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="jobLocationComment">${jobLocationComment}</td>
                                    
                                </tr>
                                  `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Start date:</b> ${jobStartTime}</td>
                                    
                                </tr>
                                `;
    if (jobStartTimeComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="jobStartTimeComment">${jobStartTimeComment}</td>
                                    
                                </tr>
                                  `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Closing date:</b> ${jobClosingDate}</td>
                                    
                                </tr>
                                `;
    if (jobClosingDateComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="jobClosingDateComment">${jobClosingDateComment}</td>
                                    
                                </tr>
                                  `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Hours:</b> ${jobHours}</td>
                                    
                                </tr>
                                `;
    if (jobHoursComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="jobHoursComment">${jobHoursComment}</td>
                                    
                                </tr>
                                `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Contract:</b> ${jobContract}</td>
                                    
                                </tr>
                                `;
    if (jobContractComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="jobContractComment">${jobContractComment}</td>
                                    
                                </tr>
                                `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><b>Salary(NZD):</b> $${jobSalary}</td>
                                    
                                </tr>
                                `;
    if (jobSalaryComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="jobSalaryComment">${jobSalaryComment}</td>
                                    
                                </tr>
                                `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>About the company</b></td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;">${companyDescription}</td>
                                </tr>
                                `;
    if (companyDescriptionComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="companyDescriptionComment">${companyDescriptionComment}</td>
                                    
                                </tr>
                                `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>About the role:</b></td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;" > ${jobDescription}</td>
                                </tr>
                                `;
    if (jobDescriptionComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="jobDescriptionComment">${jobDescriptionComment}</td>
                                    
                                </tr>
                                `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>Key skills:</b></td>
                                    
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;">${jobSkill}</td>
                                </tr>
                                `;
    if (jobSkillComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="jobSkillComment">${jobSkillComment}</td>
                                    
                                </tr>
                                `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>Contact Details:</b> </td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"> ${questionContactDetail}</td>
                                </tr>
                                `;
    if (questionContactDetailComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="questionContactDetailComment">${questionContactDetailComment}</td>
                                    
                                </tr>
                                `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td class="h3" style="padding-bottom: 10px; 
                                    background-color: #ffffff;
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-weight: Bold; 
                                    font-size:30px; 
                                    line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;"><b>Application:</b> </td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;">${applicationContactDetail}</td>
                                </tr>
                                `;
    if (applicationContactDetailComment.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="applicationContactDetailComment">${applicationContactDetailComment}</td>
                                    
                                </tr>
                                `;
    }
    string += `
                                <tr>
                                    <td class="h3" style = "padding-bottom: 10px; 
                                    background-color: #ffffff; 
                                    color:#000000; 
                                    font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:15px; line-height:37px;
                                    text-align:left; font: weight 300; 
                                    padding: 5px 25px;"><br></td>
                                </tr>
                                <tr>
                                    <td style="border-bottom: 2px solid black;"></td>
                                </tr>
                                
                                `;
    if (overallDeclineReason.length != 0) {
        string += `
                                <tr>
                                    <td class="h3" style="padding-bottom: 15px; color:#ff0000; font-family:'Lato', Helvetica, Arial, sans-serif; font-size:30px; font-weight: bold; line-height:37px; text-align:left; font: weight 300;;">Overall reason for decline:</td>
                                </tr>
                                <tr>
                                    <td class="h3" style= "padding-bottom: 10px;  
                                    color:#ff0000; 
                                    background-color: #ffffff; 
                                    font-family:'Lato', Helvetica, Arial, sans-serif; 
                                    font-size:22px; line-height:37px; 
                                    text-align:left; 
                                    font: weight 300; 
                                    padding: 5px 25px;" id="overallDeclineReason">${overallDeclineReason}</td>
                                </tr>
                                `;
    }
    string += `
                                
                            </table>
                        </td>
                        
                            
     
                        
                        <tr>
                            <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                <p style="margin: 0;">Cheers,<br>Team ATech+</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#e1e1e1" align="center" style="padding: 30px 10px 0px 10px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                                    <tr>
                                        <td bgcolor="#FFECD1" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                            <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>
                                            <p style="margin: 0;"><a href="https://team15-info-page.vercel.app/" style="color: #1746e0;">We&rsquo;re here to help you out</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                            
                        
                </table>
            </td>
        </tr>
        
    </table>
</body>
    `;
    return string;
};
exports.getEditEmailTemplate = (job, body) => {
    const {
        companyName, positionName, jobStartTime,
        jobHours, jobContract, jobSalary, jobLocation,
        jobClosingDate, companyDescription, jobDescription,
        jobSkill, questionContactDetail, applicationContactDetail,
    } = job;

    let string = `
  <body style="background-color: #e1e1e1; margin: 0 !important; padding: 0 !important;">
    <!-- HIDDEN PREHEADER TEXT -->
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We're thrilled to have you here! Get ready to dive into your new account. </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
            <td bgcolor="#00467F" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#00467F" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                             <img src="https://i.ibb.co/brrLzd9/i-OS-App-icon.png" width="200" height="200" style="display: block; border: 0px;" />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#e1e1e1" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">We're excited to have you get started. Please confirm the registration information and changes made by the admin below.</p>
                        </td>
                    </tr>
                     <!-- COPY -->
                     <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" bgcolor="#ffffff">
				
                        <tr>
                            <td style="padding: 0px 30px 80px 30px;" class="p30-15">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <style>
                                        .message-style {padding-bottom: 10px; color:#000000; font-family:'Montserrat', Arial, sans-serif; font-size:15px; line-height:37px; text-align:left; font: weight 300;}
                                        .header-style {padding-bottom: 10px; color:#000000; font-family: 'Lato', Helvetica, Arial, sans-serif; font-weight: Bold; font-size:30px; line-height:37px; text-align:left; font: weight 300;}
                                        .updated-style {padding-bottom: 10px; color:#ff0000; font-family:'Montserrat', Arial, sans-serif; font-size:22px; line-height:37px; text-align:left; font: weight 300;}
                                    </style>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                        font-weight: Bold; 
                                        font-size:30px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;" ><b>Your application information</b></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        background-color: #ffffff;
                                        color:#000000; 
                                        font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                        font-weight: Bold; 
                                        font-size:30px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><b>Job overview(Updated by admin)</b></td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 2px solid black;"></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><b>Company: </b>${companyName}</td>
                                        
                                    </tr>
                                    `;
    if (companyName !== body.companyName && body.companyName.length != 0) {
        string += `
                                      <tr>
                                      <td class="h3" style="padding-bottom: 10px; 
                                      color:#ff0000; 
                                      font-family:'Montserrat', Arial, sans-serif; 
                                      font-size:22px; 
                                      line-height:37px; 
                                      text-align:left; 
                                      font: weight 300;">${body.companyName}(Updated)</td>
                                      
                                  </tr>`;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><b>Position:</b> ${positionName}</td>
                                        
                                    </tr>
                                    `;
    if (positionName !== body.positionName && body.positionName.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.positionName}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><b>Location:</b> ${jobLocation}</td>
                                        
                                    </tr>
                                    `;
    if (jobLocation !== body.jobLocation && body.jobLocation.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.jobLocation}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><b>Start date:</b> ${jobStartTime}</td>
                                        
                                    </tr>
                                    `;
    if (jobStartTime !== body.jobStartTime && body.jobStartTime.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.jobStartTime}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><b>Closing date:</b> ${jobClosingDate}</td>
                                        
                                    </tr>
                                    `;
    if (jobClosingDate !== body.jobClosingDate && body.jobClosingDate.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.jobClosingDate}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><b>Hours:</b> ${jobHours}</td>
                                        
                                    </tr>
                                    `;
    if (jobHours !== body.jobHours && body.jobHours.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.jobHours}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><b>Contract:</b> ${jobContract}</td>
                                        
                                    </tr>
                                    `;
    if (jobContract !== body.jobContract && body.jobContract.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.jobContract}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><b>Salary(NZD):</b> $${jobSalary}</td>
                                        
                                    </tr>
                                    `;
    if (jobSalary !== body.jobSalary && body.jobSalary.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.jobSalary}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><br></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        background-color: #ffffff;
                                        color:#000000; 
                                        font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                        font-weight: Bold; 
                                        font-size:30px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300; 
                                        padding: 15px 25px;"><b>About the company</b></td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 2px solid black;"></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${companyDescription}</td>
                                    </tr>
                                    `;
    if (companyDescription !== body.companyDescription && body.companyDescription.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.companyDescription}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><br></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        background-color: #ffffff;
                                        color:#000000; 
                                        font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                        font-weight: Bold; 
                                        font-size:30px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300; 
                                        padding: 15px 25px;"><b>About the role:</b></td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 2px solid black;"></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"> ${jobDescription}</td>
                                    </tr>
                                    `;
    if (jobDescription !== body.jobDescription && body.jobDescription.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.jobDescription}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><br></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        background-color: #ffffff;
                                        color:#000000; 
                                        font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                        font-weight: Bold; 
                                        font-size:30px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300; 
                                        padding: 15px 25px;"><b>Key skills:</b></td>
                                        
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 2px solid black;"></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${jobSkill}</td>
                                    </tr>
                                    `;
    if (jobSkill !== body.jobSkill && body.jobSkill.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.jobSkill}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><br></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        background-color: #ffffff;
                                        color:#000000; 
                                        font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                        font-weight: Bold; 
                                        font-size:30px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300; 
                                        padding: 15px 25px;"><b>Contact Details:</b> </td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 2px solid black;"></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"> ${questionContactDetail}</td>
                                    </tr>
                                    `;
    if (questionContactDetail !== body.questionContactDetail && body.questionContactDetail.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.questionContactDetail}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><br></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        background-color: #ffffff;
                                        color:#000000; 
                                        font-family: 'Lato', Helvetica, Arial, sans-serif; 
                                        font-weight: Bold; 
                                        font-size:30px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300; 
                                        padding: 15px 25px;"><b>Application:</b> </td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 2px solid black;"></td>
                                    </tr>
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${applicationContactDetail}</td>
                                    </tr>
                                    `;
    if (applicationContactDetail !== body.applicationContactDetail && body.applicationContactDetail.length != 0) {
        string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#ff0000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:22px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;">${body.applicationContactDetail}(Updated)</td>
                                        
                                    </tr>
                                    `;
    }
    string += `
                                    <tr>
                                        <td class="h3" style="padding-bottom: 10px; 
                                        color:#000000; 
                                        font-family:'Montserrat', Arial, sans-serif; 
                                        font-size:15px; 
                                        line-height:37px; 
                                        text-align:left; 
                                        font: weight 300;"><br></td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 2px solid black;"></td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                <p style="margin: 0;">Cheers,<br>Team ATech+</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#e1e1e1" align="center" style="padding: 30px 10px 0px 10px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                                    <tr>
                                        <td bgcolor="#FFECD1" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                            <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>
                                            <p style="margin: 0;"><a href="https://team15-info-page.vercel.app/" style="color: #1746e0;">We&rsquo;re here to help you out</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </table>
            </td>
        </tr>
    </table>
</body>
  `;
    return string;
};

exports.getNotificationEmail = () => {
    const string = `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>application form</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link href="" rel="stylesheet" />
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
    ></script>
    <style></style>
  </head>
  <body oncontextmenu="return false" class="snippet-body">
    <!DOCTYPE html>
    <html>
      <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
          @media screen {
            @font-face {
              font-family: "Lato";
              font-style: normal;
              font-weight: 400;
              src: local("Lato Regular"), local("Lato-Regular"),
                url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff)
                  format("woff");
            }

            @font-face {
              font-family: "Lato";
              font-style: normal;
              font-weight: 700;
              src: local("Lato Bold"), local("Lato-Bold"),
                url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff)
                  format("woff");
            }

            @font-face {
              font-family: "Lato";
              font-style: italic;
              font-weight: 400;
              src: local("Lato Italic"), local("Lato-Italic"),
                url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff)
                  format("woff");
            }

            @font-face {
              font-family: "Lato";
              font-style: italic;
              font-weight: 700;
              src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
                url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff)
                  format("woff");
            }
          }

          /* CLIENT-SPECIFIC STYLES */
          body,
          table,
          td,
          a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }

          table,
          td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }

          img {
            -ms-interpolation-mode: bicubic;
          }

          /* RESET STYLES */
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
          }

          table {
            border-collapse: collapse !important;
          }

          body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }

          /* iOS BLUE LINKS */
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }

          /* MOBILE STYLES */
          @media screen and (max-width: 600px) {
            h1 {
              font-size: 32px !important;
              line-height: 32px !important;
            }
          }

          /* ANDROID CENTER FIX */
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
        </style>
      </head>

      <body
        style="
          background-color: #e1e1e1;
          margin: 0 !important;
          padding: 0 !important;
        "
      >
        <!-- HIDDEN PREHEADER TEXT -->
        <div
          style="
            display: none;
            font-size: 1px;
            color: #fefefe;
            line-height: 1px;
            font-family: 'Lato', Helvetica, Arial, sans-serif;
            max-height: 0px;
            max-width: 0px;
            opacity: 0;
            overflow: hidden;
          "
        >
          We're thrilled to have you here! Get ready to dive into your new
          account.
        </div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <!-- LOGO -->
          <tr>
            <td bgcolor="#1746e0" align="center">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 40px 10px 40px 10px"
                  ></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              bgcolor="#1746e0"
              align="center"
              style="padding: 0px 10px 0px 10px"
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="center"
                    valign="top"
                    style="
                      padding: 10px 20px 0px 20px;
                      border-radius: 4px 4px 0px 0px;
                      color: #111111;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 48px;
                      font-weight: 400;
                      letter-spacing: 4px;
                      line-height: 48px;
                    "
                  >
                    <img
                      src="https://i.ibb.co/brrLzd9/i-OS-App-icon.png"
                      width="180"
                      height="180"
                      style="display: block; border: 0px"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              bgcolor="#e1e1e1"
              align="center"
              style="padding: 0px 10px 0px 10px"
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px; background-color: #ffffff"
              >
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="center"
                    valign="top"
                    style="
                      padding: 10px 20px 20px 20px;
                      border-radius: 4px 4px 0px 0px;
                      color: #111111;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 48px;
                      font-weight: 400;
                      letter-spacing: 4px;
                      line-height: 48px;
                    "
                  >
                    <h1 style="font-size: 30px; font-weight: 400">
                      You have received a new job vacancy request!
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="left"
                    style="
                      padding: 20px 30px 40px 30px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <p style="margin: 0">
                      Tap the button below to open the CRM-portal.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#ffffff" align="left">
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      <tr>
                        <td
                          bgcolor="#ffffff"
                          align="center"
                          style="padding: 20px 30px 60px 30px"
                        >
                          <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td
                                align="center"
                                style="border-radius: 3px"
                                bgcolor="#1746e0"
                              >
                                <a
                                  href="https://team15-crm.vercel.app/"
                                  target="_blank"
                                  style="
                                    font-size: 20px;
                                    font-family: Helvetica, Arial, sans-serif;
                                    color: #ffffff;
                                    text-decoration: none;
                                    color: #ffffff;
                                    text-decoration: none;
                                    padding: 15px 25px;
                                    border-radius: 2px;
                                    border: 1px solid #1746e0;
                                    display: inline-block;
                                  "
                                  >View</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- COPY -->
                <tr>
                  <td style="padding: 20px 80px 40px 80px" class="p30-15">
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      <tr>
                        <td
                          class="h3"
                          style="
                            padding-bottom: 30px;
                            color: #444444;
                            font-family: 'Lato', Helvetica, Arial, sans-serif;
                            font-size: 25px;
                            line-height: 37px;
                            text-align: left;
                            font: weight 300; ;
                          "
                        >
                          If that doesn't work, copy and paste the following
                          link in your browser:
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="text"
                          style="
                            padding-bottom: 26px;
                            color: #666666;
                            font-family: 'Lato', Helvetica, Arial, sans-serif;
                            font-size: 16px;
                            line-height: 30px;
                            text-align: left;
                            min-width: auto !important;
                          "
                        >
                          https://team15-crm.vercel.app/
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="left"
                    style="
                      padding: 0px 30px 20px 30px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <p style="margin: 0">
                      If you have any questions, please contact the development
                      team—we're always happy to help out.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="left"
                    style="
                      padding: 0px 30px 40px 30px;
                      border-radius: 0px 0px 4px 4px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <p style="margin: 0">Cheers,<br />Team ATech+</p>
                  </td>
                </tr>
                <tr>
                  <td
                    bgcolor="#e1e1e1"
                    align="center"
                    style="padding: 30px 10px 0px 10px"
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                      style="max-width: 600px"
                    >
                      <tr>
                        <td
                          bgcolor="#FFECD1"
                          align="center"
                          style="
                            padding: 30px 30px 30px 30px;
                            border-radius: 4px 4px 4px 4px;
                            color: #666666;
                            font-family: 'Lato', Helvetica, Arial, sans-serif;
                            font-size: 18px;
                            font-weight: 400;
                            line-height: 25px;
                          "
                        >
                          <h2
                            style="
                              font-size: 20px;
                              font-weight: 400;
                              color: #111111;
                              margin: 0;
                            "
                          >
                            Need more help?
                          </h2>
                          <p style="margin: 0">
                            <a
                              href="info-page-git-master-ygua699.vercel.app"
                              style="color: #1746e0"
                              >We&rsquo;re here to help you out</a
                            >
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    <script
      type="text/javascript"
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
    ></script>
    <script type="text/javascript"></script>
  </body>
</html>

  `;
    return string;
};
