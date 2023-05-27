<?php
namespace Rustam\Scandiweb\Core\Model\contracts;

interface ModelServiceInterface
{
    public function setTable(string $table): self;

    public function where(string $columnName, string $columnValue);

    public function all();

    public function first();

    public function get();
    
    public function orderBy(string $column, string $sortBy);

    public function leftJoin(string $tableName, string $foreignKey, string $localKey): self;

    public function create(array $createData);

    public function delete(string $Id, string $columnName);

}