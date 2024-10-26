CREATE TABLE `likes` (
	`uuid` text(256) NOT NULL,
	`post_id` text NOT NULL,
	`user_id` integer NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`uuid` text(36) NOT NULL,
	`name` text(256) NOT NULL,
	`user_id` text(36) NOT NULL,
	`message` text(256) NOT NULL,
	`image_url` text(256),
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`is_deleted` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
DROP TABLE `enrollments`;--> statement-breakpoint
DROP TABLE `programs`;--> statement-breakpoint
ALTER TABLE `users` ADD `avatar_icon_url` text(256);--> statement-breakpoint
CREATE UNIQUE INDEX `likes_uuid_unique` ON `likes` (`uuid`);--> statement-breakpoint
CREATE UNIQUE INDEX `posts_uuid_unique` ON `posts` (`uuid`);--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `role`;