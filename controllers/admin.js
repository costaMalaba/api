import sendSMS from "../services/sendSMS.js";

export const SendReferral = (req, res) => {
    // CHECKING EXISTING SCHEDULE
    // const q = "INSERT INTO schedule (`id`, `date`, `time`, `to`, `patient_id`) VALUES (?)";
    // const formattedDate = moment(date).format('YYYY-MM-DD');
    // const schedule = [ schedule_id, formattedDate, time, hospital, patient_id ];

    const { pat_id, first_name, last_name, dob, sex, phone_no, hospital } = req.body;
    const patientName = `${first_name} ${last_name}`;

    // Send SMS to Hospital
    const options = {
      to: [`+${phone_no}`],
      message: `Hello ${hospital} Team,\nWe Are Requesting a Referral for Patient ${patientName}\nFrom AMANANA REGIONAL HOSPITAL\n\nType:\nStar A - to Accept\nStar B - to Reject`,
      from: "15054",
      keyword: "Star",
    };

    sendSMS(options);
  
    // con.query(q, [schedule], (err, result) => {
    //   if (err) {
    //     return res.status(500).json({ Error: "Error", Message: err });
    //   } else {
    //     // Send SMS to Hospital
    //     const options = {
    //       to: [`+${phone_no}`],
    //       message: `Hello ${hospital} Team, we are Requesting a Referral for Patient ${patientName} from ${hospitalFrom}`,
    //     };
  
    //     sendSMS(options);
  
    //     return res.status(200).json({
    //       Status: "Success",
    //       Message: "Schedule Has Been Added",
    //       Result: result,
    //     });
    //   }
    // });
  };