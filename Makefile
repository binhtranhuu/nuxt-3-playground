first-setup: 
	- yarn
	- yarn prepare
	- chmod a+x .husky/pre-commit
	- chmod a+x .husky/commit-msg
	- cp .env.example .env
