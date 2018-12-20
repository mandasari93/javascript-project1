const contactPerson = [
  {
    name: "Rina",
    gender: "female",
    emails: ["rinahafizhah@gmail.com"],
    phones: ["+6285775126423", "+6281289656840"],
    address: {
      country: "Indonesia",
      province: "Jawa Barat",
      city: "Depok"
    }
  },
  {
    name: "Manda",
    gender: "female",
    emails: ["desimandasari1993@gmail.com"],
    phones: ["+6282331337447"],
    address: {
      country: "Indonesia",
      province: "Jawa Timur",
      city: "Surabaya"
    }
  },
  {
    name: "Dheta",
    gender: "female",
    emails: ["theresiadhetacm@gmail.com"],
    phones: ["+6281211064340"],
    address: {
      country: "Indonesia",
      province: "Jawa Barat",
      city: "Depok"
    }
  }
];

const addressBook = {
  getData: data => {
    return data;
  },
  getNames: data => {
    return data.map(item => {
      return item.name;
    });
  },
  getFullContacts: data => {
    return data.map(item => {
      const { city, province, country } = item.address;
      return `Name: ${item.name}, Phone Number:(${item.phones[0]}), email: < ${item.emails[0]} >,
      lives in: ${city},
                ${province},
                ${country}`;
    });
  },
  displayConsole: data => {
    data.forEach(item => {
      console.log(item);
    });
  }
};

console.log(addressBook.getData(contactPerson));

const fullContacts = addressBook.getFullContacts(contactPerson);

addressBook.displayConsole(fullContacts);
