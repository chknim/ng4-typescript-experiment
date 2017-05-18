import { SidebarEntry } from '../../../core/models';

export class MapEntry extends SidebarEntry {
  readonly lat?: string;
  readonly lng?: string;
  readonly address?: string;
}
