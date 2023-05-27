<?php
namespace Rustam\Scandiweb\Core\Model\contracts;

interface ModelInterface
{
    public function where(string $columnName, string $columnValue);

    public function all(): self;

    public function get(): array;

    public function first(): array;

    public function orderBy(string $column = null, string $sortBy = null): self;

    public function leftJoin(string $tableName, string $foreignKey, string $localKey): self;

    public function create(array $createData);

    public function delete(string $Id, string $columnName = 'id');
}