import { Workspace } from "@executor-ts/services";
import { foo } from "libs/module";

print(foo());
print(`${Workspace} accessed!`);
