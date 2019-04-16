import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatTable,
  MatTableDataSource
} from "@angular/material";
import { Subscription } from "rxjs";

import { CommentService, Comment } from "../shared";

@Component({
  selector: "grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements OnInit, OnDestroy {
  columns: string[];
  dataSource = new MatTableDataSource<Comment>();

  @ViewChild("grid_table") gridTable: MatTable<Comment>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private subscriptions: Subscription = new Subscription();

  constructor(private commentService: CommentService) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.initGrid();
    this.getComments();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getComments(): void {
    this.subscriptions.add(
      this.commentService.getComments().subscribe((result: Comment[]) => {
        this.dataSource.data = result;
        this.gridTable.renderRows();
      })
    );
  }

  private initGrid(): void {
    this.columns = ["id", "name", "email", "postId", "body"];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
