CREATE TABLE `administrator`(
    `id` INT NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `image` VARCHAR(50) NOT NULL,
    `datecreated` DATE DEFAULT CURRENT_DATE NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `scholarships`(
    `id` VARCHAR(80) NOT NULL,
    `image` VARCHAR(50) NOT NULL,
    `scholarshipname` VARCHAR(80) NOT NULL,
    `deadline` DATE NOT NULL,
    `description` LONGTEXT NOT NULL,
    `eligibility` LONGTEXT NOT NULL,
    `duration` LONGTEXT NOT NULL,
    `programsoffered` LONGTEXT NOT NULL,
    `documentsrequired` LONGTEXT NOT NULL,
    `benefits` LONGTEXT NOT NULL,
    `applicationinformation` LONGTEXT NOT NULL,
    `hostuniversity` VARCHAR(80) NOT NULL,
    `agent` ENUM('Agent', 'No Agent') NOT NULL,
    `featured` ENUM('true', 'false') NOT NULL,
    `scholarshiptype` ENUM('Fully Funded', 'Partial') NOT NULL,
    `programs` ENUM('All Levels','Bachelors Degree', 'Masters Degree', 'Doctorate Degree', 'Post Graduate Diploma') NOT NULL,
    `scholarshipcategory` ENUM('Government', 'Private', 'Organizational', 'International', 'Research') NOT NULL,
    `country` ENUM("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe") NOT NULL, 
    `author` VARCHAR(20) NOT NULL,
    `datecreated` DATE DEFAULT CURRENT_DATE NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `articles`(
    `id` VARCHAR(80) NOT NULL,
    `image` VARCHAR(50) NOT NULL,
    `title` VARCHAR(300) NOT NULL,
    `author` VARCHAR(50) NOT NULL,
    `post` LONGTEXT NOT NULL,
    `featured` ENUM('true', 'false') NOT NULL,
    `mainfeatured` ENUM ('true', 'false') NOT NULL,
    `mustread` ENUM('true', 'false') NOT NULL,
    `category` ENUM('Job', 'Scholarship', 'Business', 'Other'),
    `datecreated` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `jobs`(
    `id` VARCHAR(80) NOT NULL,
    `image` VARCHAR(50) NOT NULL,
    `salary` INT NOT NULL,
    `featured` ENUM('true', 'false') NOT NULL,
    `company` VARCHAR(300) NOT NULL,
    `website` VARCHAR(300) NOT NULL,
    `duration` ENUM('Full Time', 'Part Time') NOT NULL,
    `position` VARCHAR(100) NOT NULL,
    `location` VARCHAR(80) NOT NULL,
    `responsibility` LONGTEXT NOT NULL,
    `requirements` LONGTEXT NOT NULL,
    `otherinformation` LONGTEXT NOT NULL,
    `datecreated` DATE DEFAULT CURRENT_DATE NOT NULL,
    `author` VARCHAR(80) NOT NULL,
    `jobcategory` VARCHAR(200),
    PRIMARY KEY(`id`)
);

CREATE TABLE `category`(
    `id` VARCHAR(80) NOT NULL,
    `categoryname` VARCHAR(100) NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `subscribe`(
    `id` VARCHAR(80) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `regions`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `regionname` ENUM('Ahafo Region', 'Ashanti Region', 'Bono Region', 'Bono East Region', 'Central Region', 'Eastern Region', 'Greater Accra Region', 'North East Region', 'Northern Region', 'Oti Region', 'Savannah Region', 'Upper East Region', 'Upper West Region', 'Volta Region', 'Western Region', 'Western North Region') NOT NULL,
    PRIMARY KEY(`id`)
);


