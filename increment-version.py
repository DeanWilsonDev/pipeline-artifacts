current_version_file = open("VERSION.md", "r")
version = current_version_file.readline()
current_version_file.close()

major, minor, patch = version.split(".")
new_version = f"{major}.{minor}.{int(patch) + 1}"

file = open("VERSION.md", "w")
file.write(new_version)
file.close()
