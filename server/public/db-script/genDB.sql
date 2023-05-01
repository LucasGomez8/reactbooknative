CREATE DATABASE `reactbook` 

-- reactbook.users definition

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_firstname` varchar(100) DEFAULT NULL,
  `user_lastname` varchar(100) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `user_image_photo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- reactbook.posts definition

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_content` text,
  `post_likes` int(11) DEFAULT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- reactbook.post_x_users definition

CREATE TABLE `post_x_users` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`post_id`,`user_id`),
  KEY `post_x_tables_FK` (`user_id`),
  CONSTRAINT `post_x_tables_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `post_x_tables_FK_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO reactbook.users (user_firstname,user_lastname,user_email,user_password,user_image_photo) VALUES
	 ('Admin','Admin','admin','admin','admin.png'),
	 ('Juan','Espinoza','jespinoza','tremendo123','juan.png'),
	 ('Federico','Rodriguez','frodriguez','piola123','fede.png'),
	 ('Gabi','Fernandez','gfernandez','gabielmejor123','gabi.png');


INSERT INTO reactbook.posts (post_content,post_likes) VALUES
	 ('Yeaaah! This is cool',12),
	 ('It''s Fucking Amazing',2500),
	 ('Oh my god! I Can''t belieave what i just looking at',3),
	 ('Do you see that thing in the sky?',5),
	 ('Im just passed Away Right Now',12000),
	 ('Aguante Argentina papa',202),
	 ('Messi el mas grande',200000);


INSERT INTO reactbook.post_x_users (post_id,user_id) VALUES
	 (1,1),
	 (2,1),
	 (3,2),
	 (5,1);
