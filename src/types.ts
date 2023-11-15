export interface NavItem {
    name: string
    href: string
    isExternal?: boolean
}

export class VariableDate {
    year: number
    month?: number
    day?: number

    constructor(year: number, month?: number, day?: number) {
        this.year = year
        this.month = month
        this.day = day
    }

    format(): string {
        let dateString = this.year.toString()
        if (this.month) {
            if (this.day) {
                dateString = new Date(
                    this.year,
                    this.month - 1,
                    this.day
                ).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })
            } else {
                dateString = new Date(
                    this.year,
                    this.month - 1
                ).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                })
            }
        }

        return dateString
    }
}
