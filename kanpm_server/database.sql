CREATE TABLE `project` (
  `id` varchar(128) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `creator_id` varchar(128) NOT NULL,
  `owner_id` varchar(128) NOT NULL,
  `team_id` varchar(128) NULL,
  `create_time` datetime NOT NULL,
  `is_archived` tinyint(1) NOT NULL,
  `description` text NULL,
  `avatar` text NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `role` (
  `id` varchar(128) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `tag` (
  `id` varchar(128) NOT NULL,
  `tag_name` varchar(255) NOT NULL,
  `tag_color` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `task` (
  `id` varchar(128) NOT NULL,
  `task_name` varchar(255) NOT NULL,
  `task_priority` tinyint(1) NOT NULL,
  `stack_id` varchar(128) NOT NULL,
  `creator_id` varchar(128) NOT NULL,
  `principal_user_id` varchar(128) NULL,
  `task_description` varchar(255) NULL,
  `create_time` datetime NULL,
  `start_time` datetime NULL,
  `end_time` datetime NULL,
  `completed_time` datetime NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `task_collaborators` (
  `id` varchar(128) NOT NULL,
  `task_id` varchar(128) NOT NULL,
  `collaborator_id` varchar(128) NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `task_stack` (
  `id` varchar(128) NOT NULL,
  `stack_name` varchar(255) NOT NULL,
  `creator_id` varchar(128) NOT NULL,
  `project_id` varchar(128) NOT NULL,
  `order` int NOT NULL,
  `create_time` datetime NOT NULL,
  `sort_by` tinyint NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

CREATE TABLE `task_tags` (
  `id` varchar(128) NOT NULL,
  `task_id` varchar(128) NOT NULL,
  `tag_id` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `team` (
  `id` varchar(128) NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `creator_id` varchar(128) NOT NULL,
  `owner_id` varchar(128) NOT NULL,
  `create_time` datetime NOT NULL,
  `is_archived` tinyint(1) NOT NULL,
  `description` varchar(255) NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `team_members` (
  `id` varchar(128) NOT NULL,
  `team_id` varchar(128) NOT NULL,
  `member_id` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `user` (
  `id` varchar(128) NOT NULL,
  `user_name` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `email` varchar(40) NOT NULL,
  `alias` varchar(128) NULL DEFAULT NULL,
  `avatar` text NULL,
  `real_name` varchar(255) NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `user_roles` (
  `id` varchar(128) NOT NULL,
  `user_id` varchar(128) NOT NULL,
  `role_id` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE
  `project`
ADD
  CONSTRAINT `project_team_fk` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`);

ALTER TABLE
  `project`
ADD
  CONSTRAINT `project_creator_fk` FOREIGN KEY (`creator_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `project`
ADD
  CONSTRAINT `project_owner_fk` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `task`
ADD
  CONSTRAINT `task_stack_fk` FOREIGN KEY (`stack_id`) REFERENCES `task_stack` (`id`);

ALTER TABLE
  `task`
ADD
  CONSTRAINT `task_principal_fk` FOREIGN KEY (`principal_user_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `task`
ADD
  CONSTRAINT `task_creator_fk` FOREIGN KEY (`creator_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `task_collaborators`
ADD
  CONSTRAINT `task_collaborator_fk` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`);

ALTER TABLE
  `task_collaborators`
ADD
  CONSTRAINT `collaborator_task_fk` FOREIGN KEY (`collaborator_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `task_stack`
ADD
  CONSTRAINT `task_stack_project_fk` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);

ALTER TABLE
  `task_stack`
ADD
  CONSTRAINT `task_stack_creator_fk` FOREIGN KEY (`creator_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `task_tags`
ADD
  CONSTRAINT `task_tag_fk` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`);

ALTER TABLE
  `task_tags`
ADD
  CONSTRAINT `tag_task_fk` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`);

ALTER TABLE
  `team`
ADD
  CONSTRAINT `team_owner_fk` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `team`
ADD
  CONSTRAINT `team_creator_fk` FOREIGN KEY (`creator_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `team_members`
ADD
  CONSTRAINT `team_member_fk` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`);

ALTER TABLE
  `team_members`
ADD
  CONSTRAINT `member_team_fk` FOREIGN KEY (`member_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `user_roles`
ADD
  CONSTRAINT `user_role_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE
  `user_roles`
ADD
  CONSTRAINT `role_user_fk` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);