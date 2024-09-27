#!/bin/bash

installAll() {
	local dirs=(*/*)
	for dir in "${dirs[@]}"; do
		if [[ -d "$dir" ]]; then
			(
				cd "$dir" || continue
				npm install &
			)
		fi
	done
	wait
}

installAll
