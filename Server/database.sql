CREATE TABLE `administrator`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `admintype` ENUM('SuperAdmin', 'NormalAdmin'),
    `image` VARCHAR(50) NOT NULL,
    `datecreated` DATE DEFAULT CURRENT_DATE NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `scholarships`(
    `id` VARCHAR(80) NOT NULL,
    `image` VARCHAR(50) NOT NULL,
    `scholarshipname` VARCHAR(80) NOT NULL,
    `deadline` DATE NOT NULL,
    `featured` ENUM('true', 'false') NOT NULL,
    `scholarshiptype` ENUM('Fully Funded', 'Partial') NOT NULL,
    `agent` ENUM('Agent', 'No Agent') NOT NULL,
    `programs` ENUM('All Levels','Bachelors Degree', 'Masters Degree', 'Doctorate Degree', 'Post Graduate Diploma') NOT NULL,
    `applicant` VARCHAR(80) NOT NULL,
    `hostuniversity` VARCHAR(80) NOT NULL,
    `offeredby` VARCHAR(80) NOT NULL,
    `aboutscholarship` VARCHAR(200) NOT NULL,
    `scholarshipbenefits` VARCHAR(200) NOT NULL,
    `eligibilitycriteria` VARCHAR(200) NOT NULL,
    `documentsrequired` VARCHAR(200) NOT NULL,
    `country` ENUM("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"),
    `apply` VARCHAR(100) NOT NULL, 
    `author` VARCHAR(80) NOT NULL,
    `duration` ENUM('1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years') NOT NULL,
    `datecreated` DATE DEFAULT CURRENT_DATE NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `articles`(
    `id` VARCHAR(80) NOT NULL,
    `image` VARCHAR(50) NOT NULL,
    `title` VARCHAR(80) NOT NULL,
    `briefinfo` VARCHAR(80) NOT NULL,
    `author` VARCHAR(80) NOT NULL,
    `post` VARCHAR(800) NOT NULL,
    `datecreated` DATE DEFAULT CURRENT_DATE NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `jobs`(
    `id` VARCHAR(80) NOT NULL,
    `image` VARCHAR(50) NULL,
    `salary` INT NOT NULL,
    `featured` ENUM('true', 'false') NOT NULL,
    `company` VARCHAR(50) NOT NULL,
    `website` VARCHAR(50) NOT NULL,
    `duration` ENUM('Full Time', 'Part Time') NOT NULL,
    `position` VARCHAR(80) NOT NULL,
    `location` VARCHAR(80) NOT NULL,
    `responsibilities` VARCHAR(300) NOT NULL,
    `responsibilitiestwo` VARCHAR(300) NOT NULL,
    `responsibilitiesthree` VARCHAR(300) NOT NULL,
    `responsibilitiesfour` VARCHAR(300) NOT NULL,
    `requirements` VARCHAR(400) NOT NULL,
    `requirementstwo` VARCHAR(400) NOT NULL,
    `requirementsthree` VARCHAR(400) NOT NULL,
    `requirementsfour` VARCHAR(400) NOT NULL,
    `otherinformation` VARCHAR(100),
    `apply` VARCHAR(100) NOT NULL, 
    `datecreated` DATE DEFAULT CURRENT_DATE NOT NULL,
    `author` VARCHAR(80) NOT NULL,
    `categoriesname` VARCHAR(80),
    PRIMARY KEY(`id`)
);

CREATE TABLE `regions`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `regionname` ENUM('Ahafo Region', 'Ashanti Region', 'Bono Region', 'Bono East Region', 'Central Region', 'Eastern Region', 'Greater Accra Region', 'North East Region', 'Northern Region', 'Oti Region', 'Savannah Region', 'Upper East Region', 'Upper West Region', 'Volta Region', 'Western Region', 'Western North Region') NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `categories`(
    `id` VARCHAR(80) NOT NULL,
    `categoriesname` VARCHAR(80),
    PRIMARY KEY(`id`)
);

CREATE TABLE `subscribe`(
    `id` VARCHAR(80) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    PRIMARY KEY(`id`)
);