export type WeekendDate = string;

export interface IPersons {
  name: string;
  weekends: WeekendDate[];
}

export interface IPersonsList {
  person: IPersons;
  deletePerson: (name: string) => void;
  updatePersonWeekends: (date: Date | null, name: string) => void;
}

export interface IAddForm {
  addPerson: (name: string) => void;
}

export interface IMatchesList {
  persons: IPersons[];
}
