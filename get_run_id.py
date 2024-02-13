import sys

build_number = sys.argv[1]
build_args = build_number.split("-")
run_id = build_args[3]
print(run_id)
