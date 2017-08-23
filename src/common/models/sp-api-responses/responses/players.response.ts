import { PageInfo } from './../models';
import { PlayerResult } from "./player.result";

export interface PlayersResponse {
    results: PlayerResult[];
    page_info: PageInfo;
}
