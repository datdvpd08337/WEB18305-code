let person = {
    cccd: 123123123,
    ho: "Doan",
    tendem: "Van",
    ten: "Dat",
    email: "datdvpd08337@fpt.edu.vn",
    getFullName: function(){
        let fullName = person.ho + "" + person.tendem +""+ person.ten;
        return fullName
    }

};
 person.ho = "Tran";
 console.log(person.ho + "" +person.tendem + "" +person.ten);