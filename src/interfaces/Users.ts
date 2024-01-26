export interface IUser {
  name?: string | FormDataEntryValue | null;
  lastName?: string | FormDataEntryValue | null;
  email: string | FormDataEntryValue | null;
  password?: string | FormDataEntryValue | null;
}
