import { Context } from "probot";
import { TaskRunner } from "./task-runner";
import { ITaskConfig } from "./interfaces/config/itaskconfig";
import { IAppConfig } from "./interfaces/config/iappconfig";
export declare class Zincr {
    appconfig: IAppConfig;
    taskconfig: ITaskConfig;
    repo: {
        repo: string;
        owner: string;
    };
    runner: TaskRunner;
    constructor(appconfig: IAppConfig, taskconfig: ITaskConfig, repo: {
        repo: string;
        owner: string;
    });
    onChange(context: Context): Promise<void>;
    setStatusPass(context: Context): Promise<import("@octokit/rest").Response<import("@octokit/rest").ChecksCreateResponse>>;
}
