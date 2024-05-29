import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export function revalidate(module: Function, options: PathOptions = {}) {
    let path = resolvePath((module as Module).meta.dir, options);

    revalidatePath(path);
}

export function redirectTo(module: Function, options: PathOptions = {}) {
    let path = resolvePath((module as Module).meta.dir, options);

    redirect(path);
}

function resolvePath(path: string, options: PathOptions) {
    let matches = path.match(/(\[[^\]]+])/g);

    for (let match of matches || []) {
        let key = match.slice(1, -1);
        let value = options[key];
        if (!value) {
            throw new Error(`Missing value for ${key}`);
        }

        path = path.replace(match, value);
    }
    path = path.replaceAll("/(overview)", "");

    return path;
}

type Module = Function & { meta: { dir: string } };
type PathOptions = { [key: string]: string };
