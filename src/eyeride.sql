-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.6.19-0ubuntu0.14.04.1 - (Ubuntu)
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             9.3.0.4992
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table eyeride.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table eyeride.migrations: ~7 rows (approximately)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`migration`, `batch`) VALUES
	('2013_12_14_211240_bumble_create_users_table', 1),
	('2013_12_14_212553_bumble_create_password_reminders_table', 1),
	('2014_09_08_045309_bumble_add_remember_token_column_to_users_table', 1),
	('2015_07_20_204551_create_products_table', 2),
	('2015_07_20_205134_create_tags_table', 2),
	('2015_07_20_205439_create_products_tags_table', 3),
	('2015_07_20_210153_create_product_images_table', 4);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;


-- Dumping structure for table eyeride.password_reminders
CREATE TABLE IF NOT EXISTS `password_reminders` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_reminders_email_index` (`email`),
  KEY `password_reminders_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table eyeride.password_reminders: ~0 rows (approximately)
/*!40000 ALTER TABLE `password_reminders` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reminders` ENABLE KEYS */;


-- Dumping structure for table eyeride.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `subcategory` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `highlight` text COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `subtitle` text COLLATE utf8_unicode_ci NOT NULL,
  `long_highlight` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `excrept` text COLLATE utf8_unicode_ci NOT NULL,
  `video` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table eyeride.products: ~33 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `category`, `subcategory`, `highlight`, `title`, `subtitle`, `long_highlight`, `description`, `excrept`, `video`, `created_at`, `updated_at`) VALUES
	(1, 'AC 100', 'Fleet Access Control', '', 'Go online to control whom can do what where', 'Open the door to total access control', 'Secure web-based control of one access point\r\nSimple integration with pre-existing systems\r\n', 'Easily integrated with biometric readers and other security systems, the ACC 100 gives you full control of one point of access, be it for a door or anything else. ', '', 'Secure web-based access control of one point\r\nConnects to wide range of locks, sensors and other applications\r\nCompatible with biometric readers and pre-existing security systems\r\nCodeless, easy programming\r\nSupports up to 30,000 cardholders', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(2, 'AC 200', 'Fleet Access Control', '', 'Go online to control whom can do what where', 'Open the door to total access control', 'Secure web-based control of two access points\r\nSimple integration with pre-existing systems\r\n', 'Easily integrated with biometric readers and other security systems, the ACC 200 gives you full control of two points of access, be it for doors or anything else. ', '', 'Secure web-based access control of two points\r\nConnects to wide range of locks, sensors and other applications\r\nCompatible with biometric readers and pre-existing security systems\r\nCodeless, easy programming\r\nCustomizable for up to 30,000 cardholders per access point', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(3, 'AC Server', 'Fleet Access Control', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(4, 'EyeCam FD100', 'Cameras', '', 'Enjoy an ultra-wide view for optimal supervision', 'Get a new perspective on traffic safety', 'Front-facing interior camera for ultra-wide view of traffic', 'Easily attached to any windshield, the ultra-wide-view EYECAM FD100 covers four traffic lanes and comes with a built-in high-gain microphone ', '', 'Front-facing ultra-wide-view interior camera\r\nIntegrated high-gain microphone\r\nCompact, sleek design\r\nFully adjustable, screwless mounting on any windshield\r\nFour-pin military-grade aviation connection', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(5, 'EyeCam DC200', 'Cameras', '', 'Enjoy unique dual views of traffic and vehicle occupants', 'Look out! And in! ', 'Unique dual-view camera for complete traffic and vehicle occupant coverage\r\nFully adjustable screwless mounting \r\n', 'Easily attached to any windshield, the EYECAM DC200 offers ultra-wide views of traffic as well as vehicle occupants and comes with an integrated high-gain microphone.', '', 'Unique dual coverage of traffic and vehicle occupants\r\nHigh-resolution SONY Super HAD CCD\r\nIntegrated high-gain microphone\r\nLow-noise 130&deg; IR night-vision view of driver and passengers\r\nFully adjustable screwless mounting on any windshield', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(6, 'EyeCam RV218', 'Cameras', '', 'Keep a look out back in any weather and light conditions with the military-grade EYECAM RV218', 'Enjoy the benefit of behindsight', 'Waterproof rear-view camera with in-built IR for night vision up to 65ft\r\nMilitary-grade design\r\n', 'The EYECAM RV218 captures high-resolution video in any weather and offers superior night vision of up to 65ft.', '', 'Military-grade rear-view camera\r\nHigh-resolution 1/3” CCD\r\nWaterproof IP69 design\r\n360&deg; adjustable mounting\r\n18 built-in IR LED for night vision up to 65ft', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(7, 'EyeCam SV88', 'Cameras', '', 'Cover all angles with the versatile EYECAM SV88', 'Master the A, B, See of efficient supervision', 'Multi-purpose waterproof camera with night vision up to 65ft ', 'Capturing high-resolution video in any weather, the rugged EYECAM SV88 is suitable for coverage of any exterior view.', '', 'Military-grade outdoor camera\r\nAdjustable for side, front or rear views\r\nHigh-resolution 1/3” CCD\r\nNight vision up to 65ft\r\nVandal-proof IP69 enclosed design', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(8, 'EyeCam VD428', 'Cameras', '', 'Cover all angles with the versatile EYECAM D428', 'Master the A, B, See of efficient supervision', 'Waterproof dome-style camera with night vision up to 45ft \r\nMilitary-grade design\r\n', 'Capturing high-resolution video in any weather, the domed design of rugged EYECAM D428 is perfect for mobile fleet applications.', '', 'Military-grade outdoor camera\r\n360&deg; adjustable dome design\r\nHigh-definition video at 525/600 lines\r\nNight vision up to 45ft\r\nWaterproof aviation-standard connection', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(9, 'EyeFi Wireless', 'WiFi On-Board', '', 'Provide every driver everywhere with a high-speed Internet connection', 'Get your fleet up to speed', 'Mobile high-speed 800/1900-band WiFi\r\nUnlimited data plan\r\n', 'EyeFi Wireless provides you with a dependable high-speed Internet connection and unlimited data wherever you are. ', '', 'Nationwide high-speed 800/1900-band Internet\r\nUnlimited data plan\r\nCellular signal booster\r\nRemote-access configuration\r\nSupports up to 100 users', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(10, 'EyeLite GPS', 'GPS', '', 'Always know exactly where your drivers are at, and go back in time to check any detail of your fleet’s travels. EyeLite GPS tells it all.', 'Ride shotgun through time', 'Real-time GPS tracker with GSM/GPRS connectivity\r\nAutomatic server backup and web-based fleet integration\r\n', 'The EyeLite GPS transmits GPS data over the GSM network, storing and resending 8,000 pings via GPRS on any connection outage. Compact in size, it’s easily installed and provides automatic firmware updates.', '', 'Real-time tracking with GPS/GLONASS and GSM/GPRS connectivity\r\nAutomatic backup of GPS data to server\r\nWeb-based integration with other EyeRide units\r\n8,000-ping data buffer GPRS/SMS resend on GSM outages\r\nEnables tracking and history review from mobile devices', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(11, 'EyeRide 200+', 'MDVR', '', 'Complete connectivity, including G-force sensor and two auxiliary sensor ports', 'Connect with the in-field reality', 'All-in-one compact two-channel video system\r\nMilitary-grade chassis\r\n', 'Providing cost-effective monitoring of small- to medium-sized vehicles, EyeRide 200+ offers extensive tracking and communications capabilities in a very compact, ruggedly constructed system.', '', 'Web-based live two-channel video streaming\r\nReal-time GPS: up to 1-second refresh rate\r\nTwo-way audio, email and SMS notifications\r\nWiFi connectivity\r\nAutomatic local and remote-server data backup', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(12, 'EyeRide 400+', 'MDVR', '', 'Complete connectivity, including G-force, speed, idling and route-deviation sensors and an additional four auxiliary sensor ports.', 'Connect with the in-field reality', 'All-in-one four-channel video system\r\nMilitary-grade chassis\r\n', 'Providing cost-effective monitoring of commercial, public transport and emergency vehicle fleets, EyeRide 400+ offers extensive tracking and communications capabilities in a ruggedly constructed system.', '', 'Web-based live two-channel video streaming\r\nReal-time GPS: up to 1-second refresh rate\r\nTwo-way audio, email and SMS notifications\r\nWiFi connectivity\r\nAutomatic local and remote-server data backup', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(13, 'EyeRide 800+', 'MDVR', '', 'Complete connectivity, including G-force, speed, idling and route-deviation sensors and an additional four auxiliary sensor ports.', 'Connect with the in-field reality', 'Eight-channel video system\r\nMilitary-grade chassis\r\n', 'Providing cost-effective monitoring of commercial, public transport and emergency vehicle fleets, EyeRide 800+ offers extensive tracking and communications capabilities in a ruggedly constructed system.', '', 'Web-based live two-channel video streaming\r\nReal-time GPS: up to 1-second refresh rate\r\nTwo-way audio, email and SMS notifications\r\nWiFi connectivity\r\nAutomatic local and remote-server data backup', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(14, 'EyeRoof 37', 'Cameras', '', 'Capture video through pouring rain and the darkest night with EyeRoof 37', 'See it through the tough times', 'Remote-control vehicle camera for all-seeing surveillance\r\nMilitary-grade IP66 design\r\n', 'Capturing video even in total darkness, this roof-mount surveillance camera enables operators to always focus on the point of interest.', '', 'Shock-proof surveillance camera for vehicle roof\r\nIR captures video in total darkness from up to 300ft\r\n360&deg; pan, 180&deg; tilt\r\n12x optical, 18x digital zoom\r\nRemotely controlled from laptop', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(15, 'FLIR', 'FLIR (DVE)', '', 'Discover pedestrians and animals through dust, smoke, foliage and total darkness', 'Spot what you can’t see', 'Wide-angle thermal imaging camera \r\nMilitary-grade design\r\n', 'FLIR employs thermal imaging to enable drivers to detect people and animals otherwise concealed by darkness, foliage, smoke or dust. Offering coverage well beyond road edges, it’s compatible with most display monitors. ', '', 'Thermal imaging camera\r\n36&deg; field of view for detection beyond road edges\r\nAutomatic lens heater for all-weather use\r\nHermetically sealed, rugged IP-67 design\r\nCompact and easy to mount', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(16, '24 12 Conv', 'Accessories', 'Miscellaneous', 'Tiny and waterproof, this 24/12V converter can be connected in any convenient location. It features a high conversion efficiency of 96% as well as overcurrent, overheating and short-circuit protection for complete dependability in industrial environments.', 'Waterproof step-down 24/12V DC converter', '', '', '', 'Waterproof converter\r\nSynchronous rectification non-isolated buck module\r\n24V (17-35V) DC to 12V, 5A 16W DC\r\n96% conversion efficiency\r\nOvercurrent, overheating and short-circuit protection\r\nOperating temperature: -40&deg;C to +85&deg;C', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(17, 'AT-GIS', 'Accessories', 'Antennas', 'Connecting to the X port on your EyeRide, this powerful internal antenna features quick-mount windshield suction cups and a thin 8.5ft coaxial cable that enables placement in any convenient location. It’s been proven to gain several bars of signal strengt', 'Internal GSM/CDMA/broadband antenna AT-GIS', '', '', '', 'Powerful internal signal booster\nConnects to EyeRide X port\nUnobtrusive low profile\n8.5ft coaxial cable\nEasy suction-cup windshield mount\nLightweight design that stays in place', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(18, 'AT-REM', 'Accessories', 'Antennas', 'This rugged dual-band antenna is ideal for industrial or other heavy-duty applications. Featuring easy surface-mounting with a waterproof bolted seal or magnetic option, it provides a gain of up to 5dBi. Perfect for remote monitoring or data transfers fro', 'External GSM/CDMA/broadband antenna AT-REM', '', '', '', 'Rugged external dual-band antenna\nASA UV-resistant plastic with heavy-duty metal base\nWaterproof bolted seal or magnetic mounting\nWorldwide coverage, including UMTS & 802.11b/g\nMax gain of up to 5 dBi (frequency-dependant)\nOperating temperature -40&deg;C to +85&deg;C', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(19, 'AT-RES', 'Accessories', 'Antennas', 'Connecting to the X port on your EyeRide, this package features a heavy-duty amplifier for 15dB signal gain, boosted by an external magnetic-mount dual-band directional antenna that provides additional strength of up to 3dBi. This is the optimal solution ', 'Max-gain amplifier and antenna AT-RES', '', '', '', 'Plugs into EyeRide X port\nProvides optimized signal for 2G/3G, hotspot and M2M applications\nHeavy-duty amplifier for 15dB gain\nMagnetic-mount dual-band directional 3dBi antenna\n9.75ft coaxial antenna cable for convenient placement\nOnly FCC-certified direct-connect solution on market', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(20, 'Dell 12', 'Accessories', 'Mobile Computer', 'The Dell Latitude 12 Rugged Extreme has undergone tests that cover the full A-Z of a really tough day at work: 72&quot; drops; blowing rain, dust and sand; vibration; functional shock; humidity; salt fog; altitude; explosive atmosphere; solar radiation; f', 'Dell Latitude 12 convertible field notebook ', '', '', '', 'Extreme IP65 durability: tested to military standard MIL-STD-810G\nRigid magnesium alloy backbone and shock-absorbent ultra-polymers\n128GB solid-state drive\nConverts from notebook to tablet for maximum versatility\nOutdoor display readable in all lighting conditions\nOperable with gloved fingers', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(21, 'Dell 14 SMR', 'Accessories', 'Mobile Computer', 'The Dell Latitude 14 Rugged has undergone tests that cover the full A-Z of a really tough day at work: a 36&quot; transit drop; blowing dust; vibration; functional shock; humidity; altitude; and thermal extremes. Operable even with gloved fingers, it feat', 'Dell Latitude 14 Rugged ', '', '', '', 'IP52 durability\nOutdoor display readable in all lighting conditions\nIntegrated camera and microphone\nOperable with gloved fingers\n500GB HD, 8GB memory\n6-star energy efficiency', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(22, 'Dell 14', 'Accessories', 'Mobile Computer', 'The Dell Latitude 14 Rugged Extreme has undergone tests that cover the full A-Z of a really tough day at work: 72&quot; drops; blowing rain, dust and sand; vibration; functional shock; humidity; salt fog; altitude; explosive atmosphere; solar radiation; f', 'Dell Latitude 14 Rugged Extreme ', '', '', '', 'Extreme IP65 durability: tested to military standard MIL-STD-810G\n128GB solid-state drive\nOutdoor display readable in all lighting conditions\nOperable with gloved fingers\n6-star energy efficiency', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(23, 'Mic-Amp', 'Accessories', 'Microphones and Speakers', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(24, 'Mic-Passive', 'Accessories', 'Microphones and Speakers', 'Looking like little more than a piece of black cable, this high-gain surveillance microphone is perfect for discrete monitoring and recording of admissible evidence. The included 6ft RCA cable enables practical mounting away from your EyeRide unit, and th', 'High-gain surveillance microphone', '', '', '', 'High-gain microphone for discrete surveillance\nBuilt-in IC preamplifier\nAutomatic level adjustment with low noise\nCompatible with most CCTV systems\n6ft RCA cable for mounting away from EyeRide\nPower cable extension', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(25, 'MO-4.3', 'Accessories', 'Monitor', 'This compact and lightweight monitor is ideal for coupling with in-vehicle cameras or CCTV systems. If coupled to reverse lights, it assumes an anti-glare blue colour when inactive not to distract the driver. Easily fitted with the included 360&deg; swive', 'MO-4.3 monitor', '', '', '', '4.3-inch TFT LCD monitor\n480x372 RGB display\n2-channel video input\nPAL/NTSC with automatic throw-over\nAnti-glare blue mirror when inactive; suitable for reversing\n360&deg; swivel-joint mount', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(26, 'MO-7', 'Accessories', 'Monitor', 'This compact and lightweight monitor is ideal for coupling with in-vehicle cameras or CCTV systems. Featuring 2-channel video input, it’s easy to connect to a reversing camera as well as to a DVD, VCD, STB, satellite receiver or other video equipment.\r\nIn', 'MO-7 monitor', '', '', '', '7-inch LED-backlit TFT LCD color monitor\nPAL/NTSC\n480x234px resolution\n2-channel video input\nIR remote control\nFree-standing or mounted with included bracket', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(27, 'MO-9', 'Accessories', 'Monitor', 'This lightweight monitor is ideal for coupling with in-vehicle cameras or CCTV systems. Featuring 2-channel video input, it’s easy to connect to a reversing camera as well as to a DVD, VCD, STB, satellite receiver or other video equipment.\r\nIncludes stabl', 'MO-9 monitor', '', '', '', '9-inch 16:9 TFT LCD color monitor\nPAL/NTSC\n800x480px RGB resolution\n2-channel video input\nRemote control\nFreestanding or fixed mounting with included bracket', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(28, 'PB-Lit-Green', 'Accessories', 'Miscellaneous', 'Easily connected to your EyeRide unit, this LED button activates instant notifications via SMS, email, alarms, pop-up video windows or other preprogrammed control center alerts. This can in turn trigger automated responses to quickly contain an emergency ', 'Green instant-notification LED button', '', '', '', 'IP65, IK08 rating\n18mm head diameter\n3A/250VAC switch rating\n~ 4N operating pressure\nLED life of 40,000 hours\nAvailable as momentary or latching switch', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(29, 'PB-Lit-Red', 'Accessories', 'Miscellaneous', 'Easily connected to your EyeRide unit, this LED button activates instant notifications via SMS, email, alarms, pop-up video windows or other preprogrammed control center alerts. This can in turn trigger automated responses to quickly contain an emergency ', 'Red instant-notification LED button', '', '', '', 'IP65, IK08 rating\n18mm head diameter\n3A/250VAC switch rating\n~ 4N operating pressure\nLED life of 40,000 hours\nAvailable as momentary or latching switch', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(30, 'SPK-10WPWR', 'Accessories', 'Microphones and Speakers', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(31, 'Temp Sensor', 'Accessories', 'Miscellaneous', 'Easily connected to your EyeRide unit, this controller will trigger notifications via SMS and email at preprogrammed temperatures. It’s the perfect monitoring and control system for refrigeration transport, automatically switching between cooling and heat', 'Temperature controller', '', '', '', 'Triggers EyeRide SMS and email at preprogrammed temperatures\n-50~+99&deg;C operating temperature\nAuto-switch control of refrigeration and heating\nAccuracy +-1%deg;C\nRefrigeration output delay protection\nSensor error alert', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(32, 'Control Center', 'Control Center', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(33, 'EyeSite Station', 'EyeSite Station', '', 'People act differently when they know they’re on camera. EyeRide puts you in the priority lane to increased safety, security and productivity. ', 'Make people show their best side', 'Anytime, anywhere surveillance with unlimited data\r\nSecure web-based control\r\n', 'EyeSite is a range of trailers, lightweight tripod systems, pole mounts and other custom-made mobile solutions for immediate dispatch and 24/7 surveillance anywhere.', '', 'Range of trailers, lightweight tripod systems and pole mounts\r\nSecure web-based control via any online device\r\n24/7 uptime with unlimited data through EyeNet\r\nFixed optics, PTZ, IR and FLIR cameras\r\nWiFi spot for field personnel', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;


-- Dumping structure for table eyeride.products_tags
CREATE TABLE IF NOT EXISTS `products_tags` (
  `product_id` int(10) unsigned NOT NULL,
  `tag_id` int(10) unsigned NOT NULL,
  KEY `products_tags_produtct_id_index` (`product_id`),
  KEY `products_tags_tag_id_index` (`tag_id`),
  CONSTRAINT `products_tags_produtct_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table eyeride.products_tags: ~80 rows (approximately)
/*!40000 ALTER TABLE `products_tags` DISABLE KEYS */;
INSERT INTO `products_tags` (`product_id`, `tag_id`) VALUES
	(1, 10),
	(1, 6),
	(1, 4),
	(1, 15),
	(2, 10),
	(2, 6),
	(2, 4),
	(2, 15),
	(3, 10),
	(3, 6),
	(3, 4),
	(3, 15),
	(5, 24),
	(5, 20),
	(5, 9),
	(5, 3),
	(4, 24),
	(4, 8),
	(4, 19),
	(4, 3),
	(6, 22),
	(6, 9),
	(6, 3),
	(6, 23),
	(7, 22),
	(7, 9),
	(7, 3),
	(7, 23),
	(8, 22),
	(8, 9),
	(8, 3),
	(8, 23),
	(9, 12),
	(9, 14),
	(9, 21),
	(9, 25),
	(10, 5),
	(10, 12),
	(10, 17),
	(10, 21),
	(11, 1),
	(11, 7),
	(11, 18),
	(11, 22),
	(11, 11),
	(11, 16),
	(12, 1),
	(12, 7),
	(12, 11),
	(12, 16),
	(12, 18),
	(12, 22),
	(12, 2),
	(12, 4),
	(13, 1),
	(13, 7),
	(13, 11),
	(13, 16),
	(13, 18),
	(13, 22),
	(13, 2),
	(13, 4),
	(15, 3),
	(15, 9),
	(15, 22),
	(14, 3),
	(14, 9),
	(14, 22),
	(14, 23),
	(15, 13),
	(32, 27),
	(32, 26),
	(32, 4),
	(32, 28),
	(32, 1),
	(32, 29),
	(33, 30),
	(33, 31),
	(33, 32),
	(33, 33);
/*!40000 ALTER TABLE `products_tags` ENABLE KEYS */;


-- Dumping structure for table eyeride.product_images
CREATE TABLE IF NOT EXISTS `product_images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `featured` tinyint(4) NOT NULL,
  `hero` tinyint(4) NOT NULL,
  `top` tinyint(4) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table eyeride.product_images: ~65 rows (approximately)
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` (`id`, `filename`, `featured`, `hero`, `top`, `product_id`, `created_at`, `updated_at`) VALUES
	(1, '2412-conv.jpg', 1, 0, 0, 16, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(2, 'acc-100.jpg', 1, 0, 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(3, 'acc-200.jpg', 1, 0, 0, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(4, 'acc-server.jpg', 1, 0, 0, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(5, 'at-gis.jpg', 1, 0, 0, 17, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(6, 'at-rem.jpg', 1, 0, 0, 18, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(7, 'at-res.jpg', 1, 0, 0, 19, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(8, 'dell-12.jpg', 1, 0, 0, 20, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(9, 'dell-14-smr.jpg', 1, 0, 0, 21, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(10, 'dell-14.jpg', 1, 0, 0, 22, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(11, 'eyecam-dc200.jpg', 1, 0, 0, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(12, 'eyecam-fd100.jpg', 1, 0, 0, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(13, 'eyecam-rv218.jpg', 1, 0, 0, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(14, 'eyecam-sv88.jpg', 1, 0, 0, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(15, 'eyecam-vd428.jpg', 1, 0, 0, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(16, 'eyefi-wireless.jpg', 1, 0, 0, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(17, 'eyelite-gps.jpg', 1, 0, 0, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(18, 'eyeride-200.jpg', 1, 0, 0, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(19, 'eyeride-400.jpg', 1, 0, 0, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(20, 'eyeride-800.jpg', 1, 0, 0, 13, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(21, 'eyeroof-37.jpg', 1, 0, 0, 14, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(22, 'flir-integration.jpg', 1, 0, 0, 15, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(23, 'mic-amp.jpg', 1, 0, 0, 23, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(24, 'mic-passive.jpg', 1, 0, 0, 24, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(25, 'mo-43.jpg', 1, 0, 0, 25, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(26, 'mo-7.jpg', 1, 0, 0, 26, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(27, 'mo-9.jpg', 1, 0, 0, 27, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(28, 'pb-lit-green.jpg', 1, 0, 0, 28, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(29, 'pb-lit-red.jpg', 1, 0, 0, 29, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(30, 'spk-10wpwr.jpg', 1, 0, 0, 30, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(31, 'temp-sensor.jpg', 1, 0, 0, 31, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(32, 'control-center.jpg', 1, 0, 0, 32, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(33, 'eyesite-station.jpg', 1, 0, 0, 33, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(51, 'acc-100-hero.jpg', 0, 1, 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(52, 'acc-200-hero.jpg', 0, 1, 0, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(53, 'acc-server-hero.jpg', 0, 1, 0, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(54, 'eyecam-fd100-hero.jpg', 0, 1, 0, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(55, 'eyecam-dc200-hero.jpg', 0, 1, 0, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(56, 'eyecam-rv218-hero.jpg', 0, 1, 0, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(57, 'eyecam-sv88-hero.jpg', 0, 1, 0, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(58, 'eyecam-vd428-hero.jpg', 0, 1, 0, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(59, 'eyefi-wireless-hero.jpg', 0, 1, 0, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(60, 'eyelite-gps-hero.jpg', 0, 1, 0, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(61, 'eyeride-200-hero.jpg', 0, 1, 0, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(62, 'eyeride-400-hero.jpg', 0, 1, 0, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(63, 'eyeride-800-hero.jpg', 0, 1, 0, 13, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(64, 'eyeroof-37-hero.jpg', 0, 1, 0, 14, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(65, 'flir-integration-hero.jpg', 0, 1, 0, 15, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(66, 'control-center-hero.jpg', 0, 1, 0, 32, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(67, 'eyesite-station-hero.jpg', 0, 1, 0, 33, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(68, 'ac-100.png', 0, 0, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(69, 'ac-200.png', 0, 0, 1, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(70, 'ac-server.png', 0, 0, 1, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(71, 'eyecam-dc-200.png', 0, 0, 1, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(72, 'eyecam-fd100.png', 0, 0, 1, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(73, 'eyecam-rv218.png', 0, 0, 1, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(74, 'eyecam-sv88.png', 0, 0, 1, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(75, 'eyecam-vd428.png', 0, 0, 1, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(76, 'eyefi-wireless.png', 0, 0, 1, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(77, 'eyelite-gps.png', 0, 0, 1, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(78, 'eyeride-200.png', 0, 0, 1, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(79, 'eyerdie-400.png', 0, 0, 1, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(80, 'eyeride-800.png', 0, 0, 1, 13, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(81, 'eyeroof-37.png', 0, 0, 1, 14, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(82, 'flir.png', 0, 0, 1, 15, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(83, 'eyesite-station.png', 0, 0, 1, 33, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(84, 'control-center.png', 0, 0, 1, 32, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;


-- Dumping structure for table eyeride.tags
CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `short_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tagline` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table eyeride.tags: ~34 rows (approximately)
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` (`id`, `name`, `short_name`, `tagline`, `image`, `created_at`, `updated_at`) VALUES
	(1, '2-Way Audio Capabilities', '', 'With Internal 5w Loudspeaker', '2-way-capabilities.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(2, '3 Months of Recordings', '', 'Store up to 3 Month of Recordings and Data Information', '3-months-recordings.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(3, '4-Pin Aviation Connection', '', 'Military Grade', '4-pin-connection.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(4, 'Alerts & Notifications', '', 'Fully Integrated with EyeRide Sensors', 'alerts-notifications.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(5, 'Automatic Backup', '', 'Secure Backup to Server', 'automatic-backup.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(6, 'Automatic Update', '', 'Remote Server Update', 'automatic-update.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(7, 'Award-Winning Video Technology', '', 'With 8Kbps Video Streaming', 'award-technology.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(8, 'Built-In Microphone', '', 'High Sensitive Gain Power', 'built-microphone.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(9, 'Extreme Night Vision', 'Night Vision', 'Capable up to 65 Feet', 'extreme-vision.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(10, 'Full Access Control', '', 'And Tag Control', 'full-access.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(11, 'Lightning Fast GPS Update', '', 'Up to 1 Second Refresh Rate', 'lightning-update.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(12, 'Low Power Consumption', '', 'Energy Saving', 'low-consumption.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(13, 'Motion Detection & Alert', 'Outdoor CAMERA', 'Integrated with EyeRide for Remote Server Notification', 'motion-detection.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(14, 'Multiple User Support', '', 'Supports up to 100 Users', 'multiple-support.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(15, 'Secure Access', '', 'Lorem Ipsum', 'secure-access.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(16, 'Shock-Proof Design', '', 'Military Grade', 'shock-design.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(17, 'Small Design', '', 'Eddicient and Compact', 'small-design.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(18, 'Strong Wireless Connectivity', '', 'As Access Point or Client', 'strong-connectivity.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(19, 'Ultra Wide View', '', 'Quality Lanes', 'ultra-view.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(20, 'Unique Dual View Design', '', 'Front and Back', 'unique-design.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(21, 'Unlimited Bandwidth', '', 'International Data Plan', 'unlimited-bandwidth.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(22, 'Vandall & Shock-Proof Casing', 'VANDAL PROOF', 'Military Grade', 'vandall-shock.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(23, 'Water-Proof Design', 'WATERPROOF', 'IP69 Extreme Weather Resistant', 'water-proof.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(24, 'Windshield Attachable', '', 'No Screws Required', 'windshield-attachable.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(25, 'WRT Open source Firewall', '', 'Secure Firewall Protection', 'wrt-firewall.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(26, 'Maps and Video View', '', 'lorem ipsum dolor sit amet', 'maps-video.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(27, 'Fleet Management', '', 'lorem ipsum dolor sit amet', 'fleet-management.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(28, 'Upto 1024 Vehicles', '', 'lorem ipsum dolor sit amet', 'upto-1024.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(29, 'Multi-screen Split View', '', 'lorem ipsum dolor sit amet', 'multi-screen.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(30, 'Easy Setup & Deploy', '', 'Can Be Easily Deployed in the Field', 'easy-setup.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(31, 'High Zoom Camera: 18x', '', 'Capable up to 18x of Zoom', 'high-zoom.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(32, 'View and Control PTZ Cameras', '', 'Full Control of Pan Tilt Zoom Cameras', 'view-control.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(33, '24/7 Year-Round Run-Time', '', 'Runs All-Day, All-Year', 'round-time.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(34, '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;


-- Dumping structure for table eyeride.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `prefix` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `middle_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `suffix` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `remember_token` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table eyeride.users: ~1 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `email`, `password`, `prefix`, `first_name`, `middle_name`, `last_name`, `suffix`, `active`, `deleted_at`, `created_at`, `updated_at`, `remember_token`) VALUES
	(1, '', 'eldair.k@gmail.com', '$2y$10$6dSE8lT0yVb57f6onxbpx.XOI3FznYp1DF5TlFbTAPeQEVBnKY9ri', NULL, 'Kristijan', NULL, 'Novakovic', NULL, 1, NULL, '2015-07-12 18:54:34', '2015-07-12 18:54:34', '');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
