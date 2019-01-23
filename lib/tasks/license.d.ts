import { Context } from "probot";
import { BaseTask } from "./base";
export default class LicenseTask extends BaseTask {
    constructor();
    checkComments(context: Context, pull: any): Promise<import("@octokit/rest").IssuesListCommentsResponseItem | undefined>;
    run(context: Context, config: any): Promise<boolean>;
}
